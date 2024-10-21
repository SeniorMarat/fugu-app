import { onMounted, ref, watch } from "vue"

import type { AdController, ShowPromiseResult } from "../types/adsgram"

interface UseAdsgramParams {
  blockId: string
  onReward: () => void
  onError?: (result: ShowPromiseResult) => void
}

interface UseAdsgramReturn {
  showAd: () => Promise<void>
}

export function useAdsgram({ blockId, onReward, onError }: UseAdsgramParams): UseAdsgramReturn {
  console.log("showAd")
  const AdControllerRef = ref<AdController | undefined>(undefined)

  onMounted(() => {
    AdControllerRef.value = window.Adsgram?.init({ blockId, debug: true, debugBannerType: "FullscreenMedia" })
  })

  watch(() => blockId, () => {
    AdControllerRef.value = window.Adsgram?.init({ blockId, debug: true, debugBannerType: "FullscreenMedia" })
  })

  const showAd = async () => {
    if (AdControllerRef.value) {
      AdControllerRef.value
        .show()
        .then(() => {
          // user watch ad till the end
          onReward()
        })
        .catch((result: ShowPromiseResult) => {
          // user get error during playing ad or skip ad
          onError?.(result)
        })
    } else {
      onError?.({
        error: true,
        done: false,
        state: "load",
        description: "Adsgram script not loaded",
      })
    }
  }

  return { showAd }
}
