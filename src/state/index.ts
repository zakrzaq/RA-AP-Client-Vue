import { defineStore } from "pinia";
import { postClientData } from "../api";

interface RootState {
  script: string | null;
  output: string[];
  loading: boolean;
  error: string | null;
}

export const useStore = defineStore("store", {
  state: () =>
    ({
      script: null,
      output: [],
      loading: false,
      error: null,
    }) as RootState,

  getters: {
    hasResults: (state) => state.output.length > 0,
  },

  actions: {
    resetClientData() {
      this.script = "";
      this.output = [];
      this.loading = false;
      this.error = null;
    },
    async getClientData(url: string) {
      this.loading = true;
      this.script = "...";
      this.output = [];
      window.scroll(0, 0)
      try {
        const { script, output } = await postClientData(url);
        this.script = script;
        this.output = output;
      } catch (e: unknown) {
        this.error = e?.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
