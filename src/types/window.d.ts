export interface PublicEnv {
  googleAnalyticsId?: string;
}

declare global {
  interface Window {
    publicEnv: PublicEnv;
  }
}
