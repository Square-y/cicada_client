// vue-prototype.d.ts
import Vue from "vue";
import api from "./axios/api";

declare module "vue/types/vue" {
    interface Vue {
        $Api:api;
    }
}
