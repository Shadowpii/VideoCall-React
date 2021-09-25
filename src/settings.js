import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "99728b250e884ab1b2a225e96f5c7aca";
const token = "00699728b250e884ab1b2a225e96f5c7acaIADNfoZ0hQMgNzyDaWwfO2GGuV6uSfHGgsOffX9mL8xXJ2TNKL8AAAAAEAAoMHyt5VxQYQEAAQDjXFBh";

export const config = {mode: "rtc", codec:"vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
