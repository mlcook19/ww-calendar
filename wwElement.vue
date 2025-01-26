<template>
  <div class="ww-calendar">
    <!-- Header with navigation -->
    <div class="ww-calendar-header">
      <button class="ww-calendar-nav" @click="previousWeek">&lt;</button>
      <span class="ww-calendar-title">
        {{ formatDateRange(startDate, endDate) }}
      </span>
      <button class="ww-calendar-nav" @click="nextWeek">&gt;</button>
    </div>
    
    <!-- Calendar grid -->
    <div class="ww-calendar-grid">
      <!-- Day headers -->
      <div v-for="day in weekDays" :key="day" class="ww-calendar-day-header">
        {{ day }}
      </div>
      
      <!-- Calendar cells -->
      <div 
        v-for="date in weekDates" 
        :key="date.toISOString()"
        class="ww-calendar-cell"
        :class="{ 'ww-calendar-cell-today': isToday(date) }"
      >
        <span class="ww-calendar-date">{{ date.getDate() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ww-calendar',
  props: {
    /* wwEditor:start */
    settings: { 
      type: Object, 
      default: () => ({}) 
    },
    /* wwEditor:end */
    content: { 
      type: Object, 
      default: () => ({}) 
    }
  },
  data() {
    return {
      startDate: this.getStartOfWeek(new Date()),
      weekDays: this.getWeekDays(this.content.firstDayOfWeek || 0)
    }
  },
  computed: {
    endDate() {
      const end = new Date(this.startDate);
      end.setDate(end.getDate() + 6);
      return end;
    },
    weekDates() {
      const dates = [];
      const current = new Date(this.startDate);
      
      for (let i = 0; i < 7; i++) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
      
      return dates;
    }
  },
  methods: {
    getStartOfWeek(date) {
      const d = new Date(date);
      const day = d.getDay();
      d.setDate(d.getDate() - day);
      return d;
    },
    formatDateRange(start, end) {
      const options = { month: 'short', day: 'numeric' };
      return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`;
    },
    isToday(date) {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    },
    previousWeek() {
      const newStart = new Date(this.startDate);
      newStart.setDate(newStart.getDate() - 7);
      this.startDate = newStart;
    },
    nextWeek() {
      const newStart = new Date(this.startDate);
      newStart.setDate(newStart.getDate() + 7);
      this.startDate = newStart;
    },
    getWeekDays(firstDay) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return [...days.slice(firstDay), ...days.slice(0, firstDay)];
    }
  }
}
</script>

<style scoped>
.ww-calendar {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px;
}

.ww-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.ww-calendar-nav {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
}

.ww-calendar-title {
  font-weight: 500;
}

.ww-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.ww-calendar-day-header {
  text-align: center;
  font-weight: 500;
  padding: 8px;
  color: #666;
}

.ww-calendar-cell {
  aspect-ratio: 1;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px;
}

.ww-calendar-date {
  display: block;
  text-align: center;
  font-weight: 500;
}

.ww-calendar-cell-today {
  background: #e6f4ff;
  border-color: #1890ff;
}
</style> 