
This Product Requirements Document (PRD) outlines the strategy to modernize the deprecated XTAudioBeacons logic into a proprietary, lean ad-tech platform using your preferred stack (Laravel + React/Expo).

# **PRD: Project "EchoPoint" (Ultrasonic Ad Tracking Platform)**

| **Document Owner** | D'Vaughn House |
| --- | --- |
| **Version** | 1.0 (Draft) |
| **Status** | Planning |
| **Tech Stack** | Laravel (Backend), React/Expo (Mobile), Swift/Kotlin (Native Modules) |

---

## **1. Executive Summary**

**EchoPoint** is a "second screen" engagement and attribution platform. It enables broadcasters and advertisers to transmit data to mobile devices via inaudible ultrasonic sound waves embedded in standard audio/video content.
By wrapping the core signal processing logic of `XTAudioBeacons` into a modern React Native SDK, we will allow any mobile app to "listen" for ad campaigns and trigger real-time, synchronized experiences (coupons, voting, product info) without relying on Bluetooth hardware or GPS.

---

## **2. Problem Statement**

* **The Gap:** TV and radio ads have zero digital attribution. Brands cannot track who saw an ad or instantly convert a viewer into a user.
* **The Friction:** QR codes require visual attention and manual scanning (bad for radio or passive TV watching).
* **The Technical Debt:** Existing ultrasonic libraries are deprecated, written in obsolete languages (Obj-C/Java), and incompatible with modern cross-platform frameworks like Expo.

---

## **3. Solution Overview**

We will build a proprietary "Audio Beacon" ecosystem consisting of three parts:

1. **The Encoder (Web Tool):** A Laravel-based tool for advertisers to generate "Audio Pixels" (WAV files with encoded IDs) to overlay on their video/audio ads.
2. **The Listener (Mobile SDK):** A modern Expo Config Plugin (wrapping Swift/Kotlin) that listens for these IDs on the user's device.
3. **The Resolver (API):** A fast Laravel API that receives the ID from the phone and returns the campaign payload (HTML, JSON, Images).

---

## **4. Technical Architecture & "The Wrapper"**

### **A. The Protocol (Modernizing XTAudioBeacons)**

We will strip the UI code from the open-source repo and strictly keep the DSP (Digital Signal Processing) logic.

* **Frequency Target:** 18kHz – 21kHz (Inaudible to humans, survivable by most TV speakers).
* **Data Payload:** We will **not** transmit complex data over audio. We will only transmit a **Short ID (UINT32)** (e.g., `CampaignID: 5855`).
* **Why:** Lower bandwidth = higher reliability and faster detection (0.5s vs 3.0s).

### **B. The Mobile Stack (React Native / Expo)**

Since Expo cannot run native Objective-C code directly, we must wrap the native logic.

* **Native Module (iOS/Swift):** utilize `AVAudioEngine` to perform FFT (Fast Fourier Transform) to detect the 18kHz+ frequencies.
* **Native Module (Android/Kotlin):** utilize `AudioRecord` and `JTransforms` for the same FFT logic.
* **The Bridge:** A JavaScript listener that subscribes to the native event.
```javascript
// Example Usage in React Native
import EchoPoint from 'echopoint-sdk';

useEffect(() => {
  const subscription = EchoPoint.addListener('onBeaconDetected', (campaignId) => {
    fetchCampaignData(campaignId); // Call Laravel Backend
  });

  EchoPoint.startListening();
  return () => subscription.remove();
}, []);

```



### **C. The Backend (Laravel)**

* **Role:** The "Brain" of the operation. It maps the dumb "Audio ID" to rich content.
* **Endpoint:** `GET /api/v1/resolve/{beacon_id}`
* **Response:**
```json
{
  "type": "coupon",
  "data": {
    "title": "50% Off Pizza",
    "code": "SUPERBOWL50",
    "expiry": "2026-02-01"
  }
}

```



---

## **5. Key Features (MVP)**

### **Phase 1: The Core (MVP)**

1. **Beacon Generator:** A simple web interface where you input a number (ID) and download a 3-second `.wav` file containing that ultrasonic ID.
2. **Basic Listener SDK:** An Expo-compatible library that can detect that specific `.wav` file playing from a nearby laptop/TV.
3. **Trigger Log:** When detected, the app logs "Heard Campaign X" to the console and fires a simple alert.

### **Phase 2: The Platform (SaaS)**

1. **Campaign Dashboard:** Advertisers can create campaigns in Laravel, assign them an ID, and view analytics ("How many devices heard this ad?").
2. **Action Triggers:** Support for Deep Links (opening a specific page in the app) and Modals (popping up a React Native view).
3. **Background Listening:** (Optional/Advanced) Ability to detect beacons while the app is backgrounded (requires heavy OS permission handling).

---

## **6. User Stories**

* **As an Advertiser:** I want to download an audio file that I can edit into my commercial so that viewers' phones react when the commercial airs.
* **As a Developer:** I want to install an NPM package `echopoint-sdk` and add `startListening()` so I don't have to write complex audio analysis code.
* **As an End User:** I want to receive a coupon automatically when I'm watching my favorite show, without having to scan a QR code manually.

---

## **7. Risks & Mitigation**

| Risk | Impact | Mitigation |
| --- | --- | --- |
| **Audio Compression** | High | Broadcasters/YouTube compress audio. **Mitigation:** Use frequencies just below the cut-off (18kHz-19kHz) rather than 21kHz+. Test extensively on YouTube uploads. |
| **Privacy (Microphone)** | High | Users reject mic permissions. **Mitigation:** "Just-in-Time" permissions. Only ask for mic access when the user enters a "Live Event" mode or explicitly wants to participate. |
| **Battery Drain** | Medium | Continuous listening drains battery. **Mitigation:** Implement "Duty Cycling" (Listen for 2s, sleep for 5s) in the native module. |

### **8. Execution Roadmap & Phasing**

#### **Phase 0: Feasibility & Signal Validation (The "Physics" Check)**

* **Goal:** Validate that standard speakers and compressed media (YouTube/TV) can transmit the required frequencies before building the mobile SDK.
* **Key Deliverable:** A standalone **Python Script (`beacon_gen.py`)**.
* **Tasks:**
1. **Develop Python Encoder:** Write a script using `numpy` and `scipy` to generate `.wav` files containing specific ultrasonic sine waves (e.g., 18kHz, 19kHz, 20kHz).
2. **Compression Stress Test:** Upload these generated audio files to YouTube, Vimeo, and a standard CMS to test if their compression algorithms strip out the high frequencies.
3. **Hardware Test:** Play the compressed video on a standard TV/Laptop and use a spectrum analyzer app (on a physical phone) to visually confirm the frequency spike remains detectable above the noise floor.
4. **Definition of Done:** Successful visual confirmation of a signal spike from a YouTube video source on a physical device.



#### **Phase 1: The Core SDK (MVP)**

* **Goal:** Build the "Listening" capability in React Native.
* **Key Deliverable:** `echopoint-sdk` (Private NPM package).
* **Tasks:**
1. **iOS Native Module:** Implement `AVAudioEngine` in Swift to detect the specific frequency confirmed in Phase 0.
2. **Android Native Module:** Implement `AudioRecord` in Kotlin.
3. **Expo Config Plugin:** Write the config plugin to inject these native modules into the Expo prebuild process.
4. **React Bridge:** Expose a simple event listener `onBeaconDetected(id)`.



#### **Phase 2: The Platform (SaaS Integration)**

* **Goal:** Connect the signal to the Laravel backend.
* **Key Deliverable:** EchoPoint Admin Dashboard.
* **Tasks:**
1. **Laravel API:** Build `GET /api/v1/resolve/{beacon_id}`.
2. **Campaign Manager:** UI to upload an audio file, overlay the Python-generated beacon, and download the "Watermarked" asset.
3. **Client App Integration:** Build the "Second Screen" demo app that fetches the coupon/content when the API returns a match.



#### **Phase 3: Scale & Optimization**

* **Goal:** Refine accuracy and battery usage.
* **Tasks:**
1. Implement "Duty Cycling" (listen for 3s, sleep for 10s) to save user battery.
2. Implement background listening permissions (optional).
3. Add analytics for "Dwell Time" (how long the user listened).



---

### **9. Success Metrics (KPIs)**

* **Detection Rate:** >90% success rate in a quiet room; >70% success rate with ambient noise.
* **Latency:** Time from "Sound emitted" to "App Trigger" is < 2.0 seconds.
* **False Positives:** < 1% (App should not trigger randomly due to squeaky brakes or tea kettles).

### **10. Immediate Next Step**

* **Action:** Developer to write `beacon_gen.py` (Phase 0) to generate the first set of test tones.
* **Owner:** D'Vaughn House