const app = new Vue({
  el: "#app",
  data: {
    carsList: [],
  },
  methods: {
    fetchCars() {
      fetch("https://wagon-garage-api.herokuapp.com/le-garage/cars")
        .then((res) => res.json())
        .then((data) => {
          this.carsList = data;
        });
    },
  },
  mounted() {
    this.fetchCars();
  },
  computed,
});

// Displaying all cars
// Fetch request to Garage API
// Render data to the HTML
