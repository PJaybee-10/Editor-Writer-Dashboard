<template>
  <div>
    <Toast />
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  name: "GlobalToast",
  setup() {
    const toast = useToast();
    const store = useStore();

    const toastData = computed(() => store.state.auth.globalToast);

    watch(
      toastData,
      (newValue) => {
        if (newValue) {
          showToast(newValue);
        }
      },
      {
        deep: true,
      }
    );

    const showToast = (payload) => {
      const {
        type = "success",
        code = "",
        message = "",
        time = 3000,
      } = payload;
      toast.add({
        severity: type,
        summary: code,
        detail: message,
        life: time,
      });
    };

    return {
      showToast,
      toastData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
