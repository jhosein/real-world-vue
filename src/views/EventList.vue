<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
    <BaseIcon></BaseIcon>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
export default {
  //Import nested components
  components: {
    //Shorthand for EventCard: EventCard
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/events")
      .then(response => {
        console.log(response.data);
        this.events = response.data;
      })
      .catch(err => {
        console.log("There was an error: " + err);
      });
  }
};
</script>
