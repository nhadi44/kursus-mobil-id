const state = {
   isMobile: false,
   isOpen: false,
   courseType: [
      {
         name: "Kursus Mobil Manual",
         link: "/kursus-mobil-manual",
      },
      {
         name: "Kursus Mobil Matic",
         link: "/kursus-mobil-matic",
      },
   ],
   aboutUs: [
      {
         name: "Tentang Kami",
         link: "/tentang-kami",
      },
      {
         name: "Kontak Kami",
         link: "/kontak-kami",
      },
   ],
   otherService: [
      {
         name: "Jasa Pengurusan STNK",
         link: "/jasa-pengurusan-stnk",
      },
      {
         name: "Jasa Pengurusan SIM",
         link: "/jasa-pengurusan-sim",
      }
   ]
};

const mutations = {
   SET_IS_MOBILE(state, payload) {
      state.isMobile = payload;
   },
   SET_IS_OPEN(state, payload) {
      state.isOpen = payload;
   },
};

const actions = {
   setIsWindowResize({ commit }) {
      window.addEventListener("resize", () => {
         window.innerWidth < 1024
            ? commit("SET_IS_MOBILE", true)
            : commit("SET_IS_MOBILE", false);
      });
   },
   setIsMobile({ commit }) {
      window.innerWidth < 1024
         ? commit("SET_IS_MOBILE", true)
         : commit("SET_IS_MOBILE", false);
   },
   setOffcanvasOpen({ commit }) {
      commit("SET_IS_OPEN", true);
   },
   setOffCanvasClose({ commit }) {
      commit("SET_IS_OPEN", false);
   },
};

const getters = {
   isMobile: (state) => state.isMobile,
   isOpen: (state) => state.isOpen,
   courseType: (state) => state.courseType,
   aboutUs: (state) => state.aboutUs,
   otherService: (state) => state.otherService,
};

export default {
   state,
   mutations,
   actions,
   getters,
};
