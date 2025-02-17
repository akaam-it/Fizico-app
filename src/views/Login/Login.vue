<script>
import { ref } from "vue";
import SvgIcons from "../../components/SvgIcons.vue";
import BlurGradient from "../../components/BlurGradient.vue";
import ShowNotif from "../../components/ShowNotif.vue";
export default {
  components: { SvgIcons, BlurGradient, ShowNotif },
  data() {
    return {
      step: 1,
      phoneNumber: "",
      phoneError: "",
      validNumbers: ["09123456789", "09987654321"],
      otp: ["", "", "", "", "", ""],
      otpError: "",
      correctOtp: "123456",
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      textNotif: "",
      typeNotif: false,
    };
  },
  methods: {
    checkPhone() {
      this.phoneError = "";
      if (!/^09\d{9}$/.test(this.phoneNumber)) {
        this.phoneError = "شماره تلفن معتبر نیست!";
        return;
      }
      if (this.validNumbers.includes(this.phoneNumber)) {
        this.step = 2;
      } else {
        this.step = 3;
      }
    },
    verifyOtp() {
      const enteredOtp = this.otp.join("");

      if (enteredOtp === this.correctOtp) {
        this.otpError = "";
         try {
        this.$refs.notif.showNotifHandler();
        this.textNotif ='شما با موفقیت وارد حساب شدید!'
        this.typeNotif = true
      } catch (err) {
        this.$refs.notif.showNotifHandler();
        this.textNotif ='خطا ! هنگام ورود به حساب مشکلی پیش آمد !!!'
        this.typeNotif = false

      }
      } else {
        this.otpError = "کد وارد شده اشتباه است!";
        
      }
    },
    validateName() {
      const regex = /^[\u0600-\u06FF\s]+$/;
      this.nameError = regex.test(this.name)
        ? ""
        : "فقط کاراکترهای فارسی مجاز هستند!";
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = regex.test(this.email)
        ? ""
        : "ایمیل وارد شده معتبر نیست!";
    },
    validatePassword() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      this.passwordError = regex.test(this.password)
        ? ""
        : "رمز عبور باید حداقل 8 کاراکتر، یک حرف بزرگ، یک حرف کوچک و یک عدد داشته باشد!";
    },
    validatePasswordMatch() {
      this.confirmPasswordError =
        this.password === this.confirmPassword
          ? ""
          : "رمز عبور و تکرار آن باید یکسان باشند!";
    },
    register() {
      this.validateName();
      this.validateEmail();
      this.validatePassword();
      this.validatePasswordMatch();
      if (
        !this.nameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        try {
          this.$refs.notif.showNotifHandler();
          this.textNotif = "ثبت نام شما با موفقیت انجام شد!";
          this.typeNotif = true;
        } catch (err) {
          this.$refs.notif.showNotifHandler();
          this.textNotif = "خطا ! ثبت نام انجام شد !";
          this.typeNotif = false;
        }
      }
    },
    handleInput(index, event) {
      const value = event.target.value;
      if (!/^\d$/.test(value)) {
        this.otp[index] = "";
        return;
      }
      this.otp[index] = value;
      if (index < this.otp.length - 1) {
        this.$nextTick(() => {
          this.$refs.otpInputs[index + 1].focus();
        });
      }
    },
    handleBackspace(index, event) {
      if (!this.otp[index] && index > 0) {
        this.$nextTick(() => {
          this.$refs.otpInputs[index - 1].focus();
        });
      }
    },
    handlePaste(event) {
      const pasteData = event.clipboardData.getData("text").trim();
      if (/^\d{6}$/.test(pasteData)) {
        this.otp = pasteData.split("");
        this.$nextTick(() => {
          this.$refs.otpInputs[5].focus();
        });
      }
      event.preventDefault();
    }
  }
  
}
</script>

<template>
  <SvgIcons />
  <BlurGradient />
  <ShowNotif :text="textNotif" :type="typeNotif" ref="notif" />
  <div class="flex items-center justufy-center h-[100vh] font-DanaBlack">
    <div
      class="w-[70%] md:[40%] lg:w-[30%] mx-auto text-center dark:bg-slate-800 bg-white px-4 sm:px-8 pt-10 pb-5 rounded-2xl shadow"
    >
      <div v-if="step === 1">
        <h1
          class="md:text-lg font-DanaBlack text-zinc-950 dark:text-white text-[14px] -mb-2"
        >
          ورود با شماره موبایل
        </h1>
        <img
          src="/images/Login.svg"
          alt="ورود و عضویت"
          class="block mx-auto w-[10rem] lg:w-[15rem] h-auto"
        />

        <div
          class="flex items-center justify-between border p-3 rounded-md border-gray-400 outline-none dark:bg-gray-800 bg-gray-200"
        >
          <input
            v-model="phoneNumber"
            type="text"
            placeholder="مثال : 09123456789"
            class="w-full outline-none text-[14px] md:text-[16px] placeholder:text-[12px] lg:placeholder:text-[14px] dark:bg-gray-800 bg-gray-200 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:font-DanaLight"
          />
          <svg class="text-gray-400 w-5 h-5">
            <use href="#phone"></use>
          </svg>
        </div>
        <p v-if="phoneError" class="text-red-600 text-[12px] md:text-sm mt-1">
          {{ phoneError }}
        </p>
        <button
          @click="checkPhone"
          class="w-full mt-4 bg-Fizico-color1 text-white text-[12px] p-3 rounded-md hover:bg-Fizico-color1/90"
        >
          ادامه
        </button>
        <a
          href=""
          class="block font-DanaLight text-gray-500 dark:text-gray-400 md:text-[14px] text-[10px] hover:text-Fizico-color1 my-2 underline"
        >
          شرایط و حریم خصوصی
        </a>
        <span
          class="block md:text-[14px] text-[10px] mt-3 lg:mt-5 font-DanaLight dark:text-gray-200"
        >
          با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
          <span class="text-Fizico-color1 font-Morabba">فیزیکو</span> را پذیرفته
          اید.
        </span>
      </div>

      <div v-else-if="step === 2">
        <h1
          class="md:text-lg font-DanaBlack text-zinc-950 dark:text-white text-[14px]"
        >
          تأیید شماره موبایل
        </h1>
        <p
          class="block md:text-[14px] text-[10px] dark:text-gray-200 my-2 lg:mt-5 font-DanaLight"
        >
          کد تأیید ۶ رقمی ارسال‌شده به شماره تلفن خود را وارد کنید.
        </p>

        <div dir="ltr" class="flex justify-center gap-x-4 mt-4">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      v-model="otp[index]"
      ref="otpInputs"
      type="text"
      class="otp-input w-1/6 text-center text-2xl pt-2 dark:bg-gray-600 bg-gray-300 dark:text-gray-200 font-DanaBlack rounded-[5px] outline-none focus:ring-1 focus:ring-Fizico-color1"
      maxlength="1"
      @input="handleInput(index, $event)"
      @keydown.backspace="handleBackspace(index, $event)"
      @paste="handlePaste"
    />
  </div>
        <p v-if="otpError" class="text-red-600 text-[12px] md:text-sm mt-1">
          {{ otpError }}
        </p>
        <button
          @click="verifyOtp"
          class="w-full mt-4 bg-Fizico-color1 text-white text-[12px] p-3 rounded-md hover:bg-Fizico-color1/90"
        >
          تأیید
        </button>
        <button
          @click="step = 1"
          class="w-full mt-4 text-gray-500 dark:text-gray-400 text-DanaLight text-[10px] lg:text-[14px]"
        >
          ویرایش شماره موبایل
        </button>
      </div>

      <div v-else-if="step === 3" class="flex flex-col gap-y-1.5">
        <h1
          class="md:text-lg font-DanaBlack text-zinc-950 dark:text-white text-[14px] mb-3"
        >
          ایجاد حساب کاربری
        </h1>
        <div
          class="flex items-center justify-between border p-3 rounded-md border-gray-400 outline-none dark:bg-gray-800 bg-gray-200"
        >
          <input
            v-model="name"
            type="text"
            placeholder="نام و نام خانوادگی:"
            class="w-full outline-none text-[14px] md:text-[16px] placeholder:text-[12px] lg:placeholder:text-[14px] dark:bg-gray-800 bg-gray-200 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:font-DanaLight"
            @input="validateName"
          />
        </div>
        <p v-if="nameError" class="text-red-600 text-[12px] md:text-sm mt-1">
          {{ nameError }}
        </p>
        <div
          class="flex items-center justify-between border p-3 rounded-md border-gray-400 outline-none dark:bg-gray-800 bg-gray-200"
        >
          <input
            v-model="email"
            type="email"
            placeholder="ایمیل:"
            class="w-full outline-none text-[14px] md:text-[16px] placeholder:text-[12px] lg:placeholder:text-[14px] dark:bg-gray-800 bg-gray-200 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:font-DanaLight"
            @input="validateEmail"
          />
        </div>
        <p v-if="emailError" class="text-red-600 text-[12px] md:text-sm mt-1">
          {{ emailError }}
        </p>
        <div
          class="flex items-center justify-between border p-3 rounded-md border-gray-400 outline-none dark:bg-gray-800 bg-gray-200"
        >
          <input
            v-model="password"
            type="password"
            placeholder="رمز عبور:"
            class="w-full outline-none text-[14px] md:text-[16px] placeholder:text-[12px] lg:placeholder:text-[14px] dark:bg-gray-800 bg-gray-200 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:font-DanaLight"
            @input="validatePassword"
          />
        </div>
        <p
          v-if="passwordError"
          class="text-red-600 text-[12px] md:text-sm mt-1"
        >
          {{ passwordError }}
        </p>
        <div
          class="flex items-center justify-between border p-3 rounded-md border-gray-400 outline-none dark:bg-gray-800 bg-gray-200"
        >
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="تکرار رمز عبور:"
            class="w-full outline-none text-[14px] md:text-[16px] placeholder:text-[12px] lg:placeholder:text-[14px] dark:bg-gray-800 bg-gray-200 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:font-DanaLight"
            @input="validatePasswordMatch"
          />
        </div>
        <p
          v-if="confirmPasswordError"
          class="text-red-600 text-[12px] md:text-sm mt-1"
        >
          {{ confirmPasswordError }}
        </p>

        <button
          @click="register"
          class="w-full mt-4 bg-Fizico-color1 text-white text-[12px] p-3 rounded-md hover:bg-Fizico-color1/90"
        >
          ثبت‌نام
        </button>
        <button
          @click="step = 1"
          class="w-full mt-4 text-gray-500 dark:text-gray-400 text-DanaLight text-[10px] lg:text-[14px]"
        >
          بازگشت
        </button>
      </div>
      <router-link
        :to="{ name: 'Home' }"
        class="flex items-start justify-center mt-5 gap-x-3 w-full text-Fizico-color1 text-DanaLight text-[12px]/6 lg:text-[14px]/6"
      >
        بازگشت به وبسایت
        <svg class="w-5 h-5 text-Fizico-color1">
          <use href="#ArrowCustom"></use>
        </svg>
      </router-link>
    </div>
  </div>
</template>
