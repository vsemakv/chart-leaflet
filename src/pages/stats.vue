<template>
  <div class="content">
    <canvas id="myChart" class="content__canvas"></canvas>
  </div>
</template>

<script>
import axios from "axios";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return {
      comments: [],
      email: [],
      count: null,
    };
  },
  methods: {
    async getComments() {
      await axios
        .get("http://jsonplaceholder.typicode.com/comments?_limit=15")
        .then((response) => {
          this.comments = response.data;
          return this.comments;
        })
        .catch((error) => console.error(error));
    },
    addOptions() {
      const ctx = document.getElementById("myChart");

      setTimeout(() => {
        
        this.email = this.comments.map((component) => component.email);
        this.count = this.comments.map((component) => component.email.length);

        new Chart(ctx, {
          type: "pie",
          data: {
            labels: this.email,
            datasets: [
              {
                label: "Count",
                data: this.count,
                borderWidth: 1,
                backgroundColor: [
                  "rgba(255, 99, 132)",
                  "rgba(255, 159, 64)",
                  "rgba(255, 205, 86)",
                  "rgba(75, 192, 192)",
                  "rgba(54, 162, 235)",
                  "rgba(153, 102, 255)",
                  "rgba(201, 203, 207)",
                  "rgba(232, 210, 207)",
                  "rgba(211, 183, 237)",
                  "rgba(251, 103, 227)",
                  "rgba(222, 223, 227)",
                  "rgba(261, 202, 100)",
                  "rgba(124, 142, 142)",
                  "rgba(224, 224, 211)",
                  "rgba(245, 223, 90)",
                ],
              },
            ],
          },
        });
      }, 1000);
    },
  },
  mounted() {
    this.getComments();
    this.addOptions();
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>