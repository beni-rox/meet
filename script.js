// Current user data
const currentUser = {
  name: "Yuma",
  role: "Rox",
  avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
  email: "yuma@roxdata.com",
  linkedin: "https://linkedin.com/in/yumatanaka",
  isCurrentUser: true
};

// User RSVP state (stored per meeting)
const userRSVP = {};

// Fake participant data with realistic names, photos, and LinkedIn URLs
const fakeParticipants = {
  sarahChen: {
    name: "Sarah Chen",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    email: "sarah.chen@company.com",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  mikeTorres: {
    name: "Mike Torres",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    email: "mike.torres@company.com",
    linkedin: "https://linkedin.com/in/miketorres"
  },
  emilyWatson: {
    name: "Emily Watson",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    email: "emily.watson@company.com",
    linkedin: "https://linkedin.com/in/emilywatson"
  },
  davidKim: {
    name: "David Kim",
    role: "QA Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    email: "david.kim@company.com",
    linkedin: "https://linkedin.com/in/davidkim"
  },
  lisaPark: {
    name: "Lisa Park",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    email: "lisa.park@company.com",
    linkedin: "https://linkedin.com/in/lisapark"
  },
  jamesWilson: {
    name: "James Wilson",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    email: "james.wilson@company.com",
    linkedin: "https://linkedin.com/in/jameswilson"
  },
  annaLee: {
    name: "Anna Lee",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    email: "anna.lee@company.com",
    linkedin: "https://linkedin.com/in/annalee"
  },
  tomBrown: {
    name: "Tom Brown",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    email: "tom.brown@company.com",
    linkedin: "https://linkedin.com/in/tombrown"
  },
  rachelGreen: {
    name: "Rachel Green",
    role: "Scrum Master",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    email: "rachel.green@company.com",
    linkedin: "https://linkedin.com/in/rachelgreen"
  },
  chrisMartin: {
    name: "Chris Martin",
    role: "Junior Developer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    email: "chris.martin@company.com",
    linkedin: "https://linkedin.com/in/chrismartin"
  },
  alexJohnson: {
    name: "Alex Johnson",
    role: "Engineering Lead",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    email: "alex.johnson@company.com",
    linkedin: "https://linkedin.com/in/alexjohnson"
  },
  gustavAndersson: {
    name: "Gustav Andersson",
    role: "Solutions Architect",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    email: "gustav@roxdata.com",
    linkedin: "https://linkedin.com/in/gustandersson"
  },
  yumaTanaka: {
    name: "Yuma Tanaka",
    role: "Sales Engineer",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    email: "yuma@roxdata.com",
    linkedin: "https://linkedin.com/in/yumatanaka"
  },
  jenniferAdams: {
    name: "Jennifer Adams",
    role: "Account Executive",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    email: "jennifer.adams@company.com",
    linkedin: "https://linkedin.com/in/jenniferadams"
  },
  markThompson: {
    name: "Mark Thompson",
    role: "VP Engineering, Acme",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    email: "mark.thompson@acme.com",
    linkedin: "https://linkedin.com/in/markthompson"
  },
  susanWhite: {
    name: "Susan White",
    role: "Project Manager, Acme",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    email: "susan.white@acme.com",
    linkedin: "https://linkedin.com/in/susanwhite"
  },
  ceoJohn: {
    name: "John Smith",
    role: "Chief Executive Officer",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=100&h=100&fit=crop&crop=face",
    email: "john.smith@company.com",
    linkedin: "https://linkedin.com/in/johnsmithceo"
  },
  ctoMaria: {
    name: "Maria Garcia",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=face",
    email: "maria.garcia@company.com",
    linkedin: "https://linkedin.com/in/mariagarcia"
  }
};

// Company data with real logos
const companies = {
  internal: { 
    name: "Internal", 
    size: "1:1 Meeting",
    logo: null
  },
  internalTeam: { 
    name: "Internal Team", 
    size: "10 participants",
    logo: null
  },
  roxDataCorp: { 
    name: "Rox Data Corp", 
    size: "200 employees",
    logo: "https://logo.clearbit.com/hubspot.com"
  },
  roxCorp: { 
    name: "Rox Corp", 
    size: "200+ employees",
    logo: "https://logo.clearbit.com/stripe.com"
  },
  acme: { 
    name: "Acme Corporation", 
    size: "5,000 employees",
    logo: "https://logo.clearbit.com/slack.com"
  },
  social: { 
    name: "Social", 
    size: "Optional",
    logo: null
  },
  na: { 
    name: "N/A", 
    size: "Personal block",
    logo: null
  }
};

// Meeting Data with real participants
// Status can be: "confirmed" (default), "pending", "cancelled"
const meetings = {
  1: {
    id: 1,
    title: "Quick Sync",
    day: 0, // Monday
    startHour: 10,
    duration: 1,
    status: "confirmed", // Confirmed meeting
    calendarSource: "google", // Calendar sync source: google, outlook
    link: "https://meet.google.com/abc-defg-hij",
    participants: [fakeParticipants.alexJohnson],
    company: companies.internal,
    summary: "Weekly sync to discuss project progress and blockers.",
    touchpoints: [
      "Previous sync covered sprint planning and resource allocation.",
      "Action items from last meeting were completed on time."
    ],
    actionItems: [
      "Review the Q1 roadmap updates before end of week."
    ],
    news: []
  },
  2: {
    id: 2,
    title: "Team Standup",
    day: 0,
    startHour: 14,
    duration: 1.5,
    status: "confirmed",
    calendarSource: "google",
    link: "https://meet.google.com/xyz-stuv-wxy",
    participants: [
      fakeParticipants.sarahChen,
      fakeParticipants.mikeTorres,
      fakeParticipants.emilyWatson,
      fakeParticipants.davidKim,
      fakeParticipants.lisaPark,
      fakeParticipants.jamesWilson,
      fakeParticipants.annaLee,
      fakeParticipants.tomBrown,
      fakeParticipants.rachelGreen,
      fakeParticipants.chrisMartin
    ],
    company: companies.internalTeam,
    summary: "Daily standup with the full development team to sync on progress.",
    touchpoints: [
      "Yesterday's standup identified a blocking issue with the API.",
      "The team resolved 12 tickets in the last sprint."
    ],
    actionItems: [
      "Follow up on the API issue with the backend team.",
      "Prepare demo for Friday's sprint review."
    ],
    news: []
  },
  3: {
    id: 3,
    title: "Focus Time",
    day: 1,
    startHour: 9,
    duration: 2,
    status: "cancelled", // CANCELLED - User blocked time but cancelled it
    calendarSource: "google",
    link: "",
    participants: [],
    company: companies.na,
    summary: "Blocked time for deep work and focused tasks.",
    touchpoints: [],
    actionItems: [
      "Complete the feature specification document.",
      "Review pending pull requests."
    ],
    news: []
  },
  4: {
    id: 4,
    title: "1:1 with Sarah",
    day: 1,
    startHour: 13.5,
    duration: 0.5,
    status: "pending", // PENDING - Awaiting confirmation
    calendarSource: "google",
    link: "https://meet.google.com/one-on-one",
    participants: [fakeParticipants.sarahChen],
    company: companies.internal,
    summary: "Regular check-in to discuss career development and project feedback.",
    touchpoints: [
      "Last 1:1 discussed the promotion timeline.",
      "Sarah mentioned potential new project opportunities."
    ],
    actionItems: [
      "Prepare talking points for performance review.",
      "Share the learning plan document."
    ],
    news: []
  },
  5: {
    id: 5,
    title: "Rox Data Corp Demo",
    day: 2,
    startHour: 13.25,
    duration: 1.5,
    status: "confirmed",
    calendarSource: "google",
    link: "https://meet.google.com/nap-hzsk-ntx",
    participants: [
      fakeParticipants.gustavAndersson,
      fakeParticipants.jenniferAdams
    ],
    company: companies.roxDataCorp,
    summary: "Past discussions summary, with reminder of open items that have been mentioned.",
    touchpoints: [
      'No available transcripts or summarized discussion points from previous meetings titled "Gustav // Yuma".',
      "Recent relevant meetings involving Rox Data Corp. have largely been internal or involved different participants.",
      '<strong>No relevant emails surfaced</strong> between these participants and Rox Data Corp. recently.',
      '<strong>No recent note content available</strong> to extract next steps or action items.'
    ],
    actionItems: [
      '<strong>No pending action items or next steps recorded</strong> from previous meetings with Rox Data Corp., Gustav, or Yuma.'
    ],
    news: [
      '<strong>Rox Data Corp. launched an AI-powered Agentic CRM.</strong> This system is designed to transform traditional sales software into proactive, intelligent tools.',
      'The platform predicts customer needs, unifies customer info, and boosts productivity for enterprise sales teams.'
    ],
    subItems: {
      touchpoints: [
        { parent: 1, items: ['Example: "Test meeting" (Dec 4), attendees included Yuma and Beni.', 'Example: "OCI Sync-up" (Dec 4), attendee: Teja.'] }
      ]
    }
  },
  6: {
    id: 6,
    title: "All Hands Meeting",
    day: 3,
    startHour: 10,
    duration: 1,
    status: "confirmed",
    calendarSource: "google",
    link: "https://meet.google.com/all-hands-dec",
    participants: [
      fakeParticipants.ceoJohn,
      fakeParticipants.ctoMaria,
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown
    ],
    company: companies.roxCorp,
    summary: "Monthly company-wide meeting to share updates and celebrate wins.",
    touchpoints: [
      "Last month's all-hands announced the Series B funding.",
      "Q3 results exceeded expectations by 15%."
    ],
    actionItems: [
      "Submit questions for the Q&A session before Thursday.",
      "Review the company dashboard for updated metrics."
    ],
    news: [
      "<strong>Company reached 200 employees milestone</strong> this month.",
      "New office opening in Austin announced for Q1 next year."
    ]
  },
  7: {
    id: 7,
    title: "Client Review: Acme",
    day: 3,
    startHour: 14,
    duration: 1,
    status: "pending", // PENDING - Client hasn't confirmed yet
    calendarSource: "google",
    link: "https://meet.google.com/acme-review",
    participants: [
      fakeParticipants.jenniferAdams,
      fakeParticipants.markThompson,
      fakeParticipants.susanWhite
    ],
    company: companies.acme,
    summary: "Quarterly business review with Acme's leadership team.",
    touchpoints: [
      "Last QBR identified three expansion opportunities.",
      "Acme renewed their contract for 2 more years in October.",
      "Support ticket volume decreased 30% after latest release."
    ],
    actionItems: [
      "Prepare ROI report for the review meeting.",
      "Follow up on the integration request from last call.",
      "Schedule training session for new Acme team members."
    ],
    news: [
      "<strong>Acme announced expansion to European markets</strong> - potential for increased usage.",
      "New CTO joined Acme last month - may want to schedule intro call."
    ]
  },
  8: {
    id: 8,
    title: "Product Planning",
    day: 3,
    startHour: 16,
    duration: 1.5,
    status: "cancelled", // CANCELLED - Meeting was cancelled
    calendarSource: "google",
    link: "https://meet.google.com/prod-planning",
    participants: [
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown,
      fakeParticipants.emilyWatson,
      fakeParticipants.mikeTorres
    ],
    company: { ...companies.internal, size: "4 participants" },
    summary: "Weekly product planning session to review roadmap and priorities.",
    touchpoints: [
      "Last week focused on Q1 planning.",
      "Feature prioritization was completed."
    ],
    actionItems: [
      "Finalize Q1 roadmap document.",
      "Schedule design review for new features."
    ],
    news: []
  },
  9: {
    id: 9,
    title: "Sprint Review",
    day: 4,
    startHour: 10,
    duration: 1,
    status: "confirmed",
    calendarSource: "google",
    link: "https://meet.google.com/sprint-review",
    participants: [
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown,
      fakeParticipants.mikeTorres,
      fakeParticipants.emilyWatson,
      fakeParticipants.davidKim,
      fakeParticipants.lisaPark
    ],
    company: { ...companies.internal, size: "6 participants" },
    summary: "End of sprint demo and review session.",
    touchpoints: [
      "Sprint 23 completed with 15 story points.",
      "3 bugs were fixed during the sprint."
    ],
    actionItems: [
      "Demo new features to stakeholders.",
      "Collect feedback for next sprint."
    ],
    news: []
  },
  10: {
    id: 10,
    title: "Happy Hour",
    day: 4,
    startHour: 17,
    duration: 1,
    status: "pending", // PENDING - Optional event, not yet confirmed attendance
    calendarSource: "google",
    link: "",
    participants: [],
    company: companies.social,
    summary: "Weekly team social - virtual happy hour.",
    touchpoints: [],
    actionItems: [],
    news: []
  }
};

// State
let currentWeekStart = getWeekStart(new Date());
let selectedMeetingId = null;
let selectedEventIndex = -1;
const eventList = [];
let miniCalendarDate = new Date(); // For mini calendar navigation

// DOM Elements
const monthTitle = document.getElementById('monthTitle');
const dayHeaders = document.getElementById('dayHeaders');
const daysContainer = document.getElementById('daysContainer');
const currentTimeIndicator = document.getElementById('currentTimeIndicator');
const meetingPanel = document.getElementById('meetingPanel');
const meetingTooltip = document.getElementById('meetingTooltip');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  renderMiniCalendar();
  updateCurrentTimeIndicator();
  setInterval(updateCurrentTimeIndicator, 60000); // Update every minute
  
  // Sidebar toggle
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
  
  // Tab switching
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
  
  // Navigation buttons
  document.getElementById('prevWeek').addEventListener('click', () => navigateWeek(-1));
  document.getElementById('nextWeek').addEventListener('click', () => navigateWeek(1));
  document.getElementById('todayBtn').addEventListener('click', goToToday);
  
  // Mini calendar navigation
  document.getElementById('miniPrevMonth').addEventListener('click', () => navigateMiniCalendar(-1));
  document.getElementById('miniNextMonth').addEventListener('click', () => navigateMiniCalendar(1));
  
  // Settings dropdown
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDropdown = document.getElementById('settingsDropdown');
  
  if (settingsBtn && settingsDropdown) {
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsDropdown.classList.toggle('visible');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!settingsDropdown.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsDropdown.classList.remove('visible');
      }
    });
    
    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        settingsDropdown.classList.remove('visible');
      }
    });
  }
  
  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Click outside events to deselect
  document.addEventListener('click', handleClickOutside);
  
  // Add click handler to time grid for deselection
  const timeGrid = document.getElementById('timeGrid');
  if (timeGrid) {
    timeGrid.addEventListener('click', (e) => {
      if (!e.target.closest('.calendar-event') && selectedMeetingId !== null) {
        deselectAll();
      }
    });
  }
  
  // Show empty state by default (no meeting selected)
  showEmptyState();
});

function handleClickOutside(e) {
  // Check if click was on a calendar event or inside the meeting panel
  const clickedEvent = e.target.closest('.calendar-event');
  const clickedPanel = e.target.closest('.meeting-panel');
  const clickedSettings = e.target.closest('.settings-dropdown-container');
  const clickedControls = e.target.closest('.calendar-controls');
  const clickedHeader = e.target.closest('.calendar-header');
  
  // If clicked on the main content area (calendar) but not on an event or controls, deselect
  if (!clickedEvent && !clickedPanel && !clickedSettings && !clickedControls && !clickedHeader) {
    const clickedMain = e.target.closest('.main-content') || 
                       e.target.closest('.calendar-container');
    if (clickedMain && selectedMeetingId !== null) {
      deselectAll();
    }
  }
}

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
  return new Date(d.setDate(diff));
}

function navigateWeek(direction) {
  currentWeekStart = new Date(currentWeekStart);
  currentWeekStart.setDate(currentWeekStart.getDate() + (direction * 7));
  renderCalendar();
  
  // Update mini calendar to show the month containing the current week
  miniCalendarDate = new Date(currentWeekStart);
  renderMiniCalendar();
}

function goToToday() {
  currentWeekStart = getWeekStart(new Date());
  renderCalendar();
  
  // Update mini calendar to show current month
  miniCalendarDate = new Date();
  renderMiniCalendar();
}

function renderCalendar() {
  const today = new Date();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  // Update month title
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  monthTitle.textContent = `${monthNames[currentWeekStart.getMonth()]} ${currentWeekStart.getFullYear()}`;
  
  // Clear existing
  dayHeaders.innerHTML = '<div class="time-gutter"></div>';
  daysContainer.innerHTML = '';
  eventList.length = 0;
  
  // Render day headers and columns
  for (let i = 0; i < 5; i++) {
    const date = new Date(currentWeekStart);
    date.setDate(date.getDate() + i);
    
    const isToday = date.toDateString() === today.toDateString();
    
    // Day header
    const header = document.createElement('div');
    header.className = `day-header${isToday ? ' today' : ''}`;
    header.innerHTML = `
      <span class="day-name">${days[i]}</span>
      <span class="day-number">${date.getDate()}</span>
    `;
    dayHeaders.appendChild(header);
    
    // Day column
    const column = document.createElement('div');
    column.className = `day-column${isToday ? ' today' : ''}`;
    column.dataset.day = i;
    
    // Hour slots (6 AM to 12 AM = 18 hours)
    for (let h = 0; h < 18; h++) {
      const slot = document.createElement('div');
      slot.className = 'hour-slot';
      column.appendChild(slot);
    }
    
    daysContainer.appendChild(column);
  }
  
  // Render events
  Object.values(meetings).forEach(meeting => {
    if (meeting.day >= 0 && meeting.day < 5) {
      renderEvent(meeting);
    }
  });
  
  // Update current time indicator
  updateCurrentTimeIndicator();
}

function renderEvent(meeting) {
  const column = daysContainer.children[meeting.day];
  if (!column) return;
  
  const event = document.createElement('div');
  // Add status class for visual differentiation
  const status = meeting.status || 'confirmed';
  event.className = `calendar-event calendar-${meeting.calendarSource} status-${status}`;
  event.dataset.id = meeting.id;
  event.dataset.status = status;
  
  // Calculate position as percentage (6 AM = 0%, 12 AM = 100%)
  const startHour = 6; // Calendar starts at 6 AM
  const totalHours = 18; // 6 AM to 12 AM
  const topPercent = ((meeting.startHour - startHour) / totalHours) * 100;
  const heightPercent = (meeting.duration / totalHours) * 100;
  
  event.style.top = `${topPercent}%`;
  event.style.height = `${heightPercent}%`;
  
  const startTime = formatTime(meeting.startHour);
  const endTime = formatTime(meeting.startHour + meeting.duration);
  
  // Get favicon from company logo or use a default
  const faviconUrl = meeting.company?.logo || '';
  const faviconHtml = faviconUrl 
    ? `<img class="event-favicon" src="${faviconUrl}" alt="" onerror="this.style.display='none'">`
    : '';
  
  event.innerHTML = `
    <div class="event-content">
      <div class="event-title-wrapper">
        ${faviconHtml}
        <span class="event-title">${meeting.title}</span>
      </div>
      <span class="event-time">${startTime}-${endTime}</span>
    </div>
  `;
  
  event.addEventListener('click', (e) => {
    e.stopPropagation();
    selectMeeting(meeting.id, event);
  });
  
  // Tooltip event listeners
  event.addEventListener('mouseenter', (e) => {
    showMeetingTooltip(e, meeting);
  });
  
  event.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });
  
  event.addEventListener('mouseleave', () => {
    hideMeetingTooltip();
  });
  
  column.appendChild(event);
  eventList.push({ id: meeting.id, element: event });
}

function formatTime(hour) {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  return m > 0 ? `${displayHour}:${m.toString().padStart(2, '0')} ${period}` : `${displayHour} ${period}`;
}

function formatTimeRange(startHour, duration) {
  const date = new Date(currentWeekStart);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const startTime = formatTime(startHour);
  const endTime = formatTime(startHour + duration);
  return `${startTime} - ${endTime}`;
}

function updateCurrentTimeIndicator() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  const startHour = 6; // Calendar starts at 6 AM
  const totalHours = 18; // 6 AM to 12 AM (midnight)
  const currentTime = hours + minutes / 60;
  
  // Only show if within visible hours (6 AM - 12 AM)
  if (hours >= 6 && hours < 24) {
    const topPercent = ((currentTime - startHour) / totalHours) * 100;
    currentTimeIndicator.style.top = `${topPercent}%`;
    currentTimeIndicator.style.display = 'flex';
  } else {
    currentTimeIndicator.style.display = 'none';
  }
}

function selectMeeting(meetingId, eventElement) {
  // Deselect all events
  document.querySelectorAll('.calendar-event').forEach(e => {
    e.classList.remove('selected');
  });
  
  // Select clicked event
  eventElement.classList.add('selected');
  selectedMeetingId = meetingId;
  
  // Find index in event list
  selectedEventIndex = eventList.findIndex(e => e.id == meetingId);
  
  // Get meeting data
  const meeting = meetings[meetingId];
  if (!meeting) return;
  
  // Show meeting content panel (hide empty state)
  showMeetingContent();
  
  // Update panel content
  updateMeetingPanel(meeting);
}

function updateMeetingPanel(meeting) {
  // Update title
  const titleElement = document.getElementById('meetingTitle');
  titleElement.textContent = meeting.title;
  
  // Update ask suggestions based on meeting timing
  updateAskSuggestions(meeting);
  
  // Update title styling based on status
  const status = meeting.status || 'confirmed';
  
  // Remove any previous status classes from title
  titleElement.classList.remove('cancelled', 'pending');
  
  if (status === 'cancelled') {
    titleElement.classList.add('cancelled');
  }
  
  // Update time
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const date = new Date(currentWeekStart);
  date.setDate(date.getDate() + meeting.day);
  const timeStr = formatTimeRange(meeting.startHour, meeting.duration);
  document.getElementById('meetingTime').textContent = `${days[meeting.day]} ${date.getDate()}, ${timeStr}`;
  
  // Update link
  const linkContainer = document.getElementById('meetingLinkContainer');
  const linkElement = document.getElementById('meetingLink');
  if (meeting.link) {
    linkElement.textContent = meeting.link;
    linkElement.href = meeting.link;
    linkContainer.style.display = 'flex';
  } else {
    linkContainer.style.display = 'none';
  }
  
  // Update participants
  updateParticipants(meeting.participants, meeting.id);
  
  // Update company
  document.getElementById('companyName').textContent = meeting.company.name;
  document.getElementById('companySize').textContent = meeting.company.size;
  
  // Update company logo
  const companyLogo = document.getElementById('companyLogo');
  const companyDefaultIcon = document.getElementById('companyDefaultIcon');
  if (meeting.company.logo) {
    companyLogo.src = meeting.company.logo;
    companyLogo.alt = meeting.company.name;
    companyLogo.style.display = 'block';
    companyLogo.onerror = function() {
      this.style.display = 'none';
      companyDefaultIcon.style.display = 'block';
    };
    companyDefaultIcon.style.display = 'none';
  } else {
    companyLogo.style.display = 'none';
    companyDefaultIcon.style.display = 'block';
  }
  
  // Update AI summary
  document.getElementById('aiSummaryText').textContent = meeting.summary;
  
  // Update touchpoints
  updateListSection('touchpointsList', meeting.touchpoints, meeting.subItems?.touchpoints);
  
  // Update action items
  updateListSection('actionItemsList', meeting.actionItems);
  
  // Update news
  updateListSection('newsList', meeting.news);
}

function updateParticipants(participants, meetingId) {
  const container = document.getElementById('participantsList');
  container.innerHTML = '';
  
  // Filled LinkedIn logo SVG for inline display (official LinkedIn blue)
  const linkedinIconSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0077b5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`;
  
  // Always add current user first with RSVP controls
  const userDiv = document.createElement('div');
  userDiv.className = 'participant user-participant';
  const currentRSVP = userRSVP[meetingId] || 'yes';
  userDiv.innerHTML = `
    <div class="participant-avatar">
      <img src="${currentUser.avatar}" alt="${currentUser.name}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #f6c343 0%, #e5a91a 100%)'; this.parentElement.innerHTML='<span style=\\"color:white;font-size:14px;font-weight:500;\\">${currentUser.name.charAt(0)}</span>'">
    </div>
    <div class="participant-info">
      <div class="participant-name-wrapper">
        <span class="participant-name">${currentUser.name}</span>
      </div>
      <span class="participant-role">${currentUser.role}</span>
    </div>
    <div class="rsvp-controls">
      <button class="rsvp-btn ${currentRSVP === 'yes' ? 'active' : ''}" data-rsvp="yes" data-meeting="${meetingId}">Yes</button>
      <button class="rsvp-btn ${currentRSVP === 'maybe' ? 'active' : ''}" data-rsvp="maybe" data-meeting="${meetingId}">Maybe</button>
      <button class="rsvp-btn ${currentRSVP === 'no' ? 'active' : ''}" data-rsvp="no" data-meeting="${meetingId}">No</button>
    </div>
  `;
  container.appendChild(userDiv);
  
  // Add RSVP event listeners
  userDiv.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rsvpValue = e.target.dataset.rsvp;
      const meetingId = e.target.dataset.meeting;
      const previousValue = userRSVP[meetingId];
      
      // Only update if value changed
      if (previousValue !== rsvpValue) {
        userRSVP[meetingId] = rsvpValue;
        
        // Update button states
        userDiv.querySelectorAll('.rsvp-btn').forEach(b => {
          b.classList.remove('active');
          if (b.dataset.rsvp === rsvpValue) {
            b.classList.add('active');
          }
        });
        
        // Show toast notification
        const rsvpMessages = {
          yes: 'RSVP updated to Yes',
          maybe: 'RSVP updated to Maybe',
          no: 'RSVP updated to No'
        };
        showToast(rsvpMessages[rsvpValue], 'success');
      }
    });
  });
  
  if (participants.length === 0) {
    // Only show user participant, no need for "no participants" message
    return;
  }
  
  participants.forEach((participant, index) => {
    const div = document.createElement('div');
    div.className = 'participant';
    div.innerHTML = `
      <div class="participant-avatar">
        <img src="${participant.avatar}" alt="${participant.name}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, ${getAvatarColor(index)} 0%, ${getDarkerColor(index)} 100%)'; this.parentElement.innerHTML='<span style=\\"color:white;font-size:14px;font-weight:500;\\">${participant.name.charAt(0)}</span>'">
      </div>
      <div class="participant-info">
        <div class="participant-name-wrapper">
          <a href="${participant.linkedin}" target="_blank" class="participant-name" title="View LinkedIn profile">${participant.name}</a>
          <a href="${participant.linkedin}" target="_blank" class="participant-linkedin-icon" title="View LinkedIn profile">${linkedinIconSVG}</a>
        </div>
        <span class="participant-role">${participant.role}</span>
      </div>
      <div class="participant-actions">
        <a href="mailto:${participant.email}" class="action-icon email" title="Send email">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.33" y="2.67" width="13.33" height="10.67" rx="1.33" stroke="#888" stroke-width="1.33"/>
            <path d="M1.33 5.33L8 9.33L14.67 5.33" stroke="#888" stroke-width="1.33" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    `;
    container.appendChild(div);
  });
}

function getAvatarColor(index) {
  const colors = ['#7eb8c9', '#c9a66b', '#9b7eb8', '#7eb87e', '#b87e7e', '#b8a67e'];
  return colors[index % colors.length];
}

function getDarkerColor(index) {
  const colors = ['#5a9aad', '#a68549', '#7d5a9a', '#5a9a5a', '#9a5a5a', '#9a8a5a'];
  return colors[index % colors.length];
}

function updateListSection(elementId, items, subItems = null) {
  const element = document.getElementById(elementId);
  
  if (!items || items.length === 0) {
    element.innerHTML = '<li>No items available.</li>';
    return;
  }
  
  let html = '';
  items.forEach((item, index) => {
    html += `<li>${item}`;
    
    if (subItems) {
      const subItem = subItems.find(s => s.parent === index);
      if (subItem) {
        html += '<ul>';
        subItem.items.forEach(sub => {
          html += `<li>${sub}</li>`;
        });
        html += '</ul>';
      }
    }
    
    html += '</li>';
  });
  
  element.innerHTML = html;
}

function handleKeyboardShortcuts(e) {
  // Don't trigger if user is typing in an input
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  
  switch (e.key) {
    case 't':
    case 'T':
      goToToday();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      navigateWeek(-1);
      break;
    case 'ArrowRight':
      e.preventDefault();
      navigateWeek(1);
      break;
    case 'ArrowDown':
      e.preventDefault();
      selectNextEvent();
      break;
    case 'ArrowUp':
      e.preventDefault();
      selectPrevEvent();
      break;
    case 'Escape':
      deselectAll();
      break;
  }
}

function selectNextEvent() {
  if (eventList.length === 0) return;
  selectedEventIndex = (selectedEventIndex + 1) % eventList.length;
  const event = eventList[selectedEventIndex];
  selectMeeting(event.id, event.element);
  event.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function selectPrevEvent() {
  if (eventList.length === 0) return;
  selectedEventIndex = selectedEventIndex <= 0 ? eventList.length - 1 : selectedEventIndex - 1;
  const event = eventList[selectedEventIndex];
  selectMeeting(event.id, event.element);
  event.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function deselectAll() {
  document.querySelectorAll('.calendar-event').forEach(e => {
    e.classList.remove('selected');
  });
  selectedMeetingId = null;
  selectedEventIndex = -1;
  showEmptyState();
}

// ==================== PANEL STATE MANAGEMENT ====================

function showEmptyState() {
  const emptyState = document.getElementById('panelEmptyState');
  const meetingContent = document.getElementById('panelMeetingContent');
  
  if (emptyState) emptyState.style.display = 'flex';
  if (meetingContent) meetingContent.style.display = 'none';
  
  // Clear ask suggestions when no meeting is selected
  clearAskSuggestions();
  
  // Clear the ask input
  const askInput = document.getElementById('askInput');
  if (askInput) askInput.value = '';
  
  // Update mini calendar to sync with current week
  miniCalendarDate = new Date(currentWeekStart);
  renderMiniCalendar();
}

function showMeetingContent() {
  const emptyState = document.getElementById('panelEmptyState');
  const meetingContent = document.getElementById('panelMeetingContent');
  
  if (emptyState) emptyState.style.display = 'none';
  if (meetingContent) meetingContent.style.display = 'flex';
}

// ==================== MINI CALENDAR ====================

function renderMiniCalendar() {
  const titleEl = document.getElementById('miniCalendarTitle');
  const daysEl = document.getElementById('miniCalendarDays');
  
  if (!titleEl || !daysEl) return;
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  const year = miniCalendarDate.getFullYear();
  const month = miniCalendarDate.getMonth();
  
  titleEl.textContent = `${monthNames[month]} ${year}`;
  
  // Clear existing days
  daysEl.innerHTML = '';
  
  // Get first day of month and total days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay(); // 0 = Sunday
  
  // Get days from previous month to fill the first row
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  
  // Today's date for highlighting
  const today = new Date();
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
  
  // Days from previous month
  for (let i = startingDay - 1; i >= 0; i--) {
    const dayNum = prevMonthLastDay - i;
    const dayEl = createMiniDayElement(dayNum, true, null);
    daysEl.appendChild(dayEl);
  }
  
  // Days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = isCurrentMonth && day === today.getDate();
    
    // Check if this day has meetings
    const hasMeeting = checkDayHasMeetings(date);
    
    const dayEl = createMiniDayElement(day, false, date, isToday, hasMeeting);
    daysEl.appendChild(dayEl);
  }
  
  // Days from next month to fill the last row
  const totalCells = startingDay + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  
  for (let i = 1; i <= remainingCells; i++) {
    const dayEl = createMiniDayElement(i, true, null);
    daysEl.appendChild(dayEl);
  }
}

function createMiniDayElement(day, isOtherMonth, date, isToday = false, hasMeeting = false) {
  const dayEl = document.createElement('div');
  dayEl.className = 'mini-day';
  dayEl.textContent = day;
  
  if (isOtherMonth) {
    dayEl.classList.add('other-month');
  } else {
    if (isToday) {
      dayEl.classList.add('today');
    }
    
    if (hasMeeting) {
      dayEl.classList.add('has-meeting');
    }
    
    // Click to navigate to that week
    if (date) {
      dayEl.addEventListener('click', () => {
        currentWeekStart = getWeekStart(date);
        renderCalendar();
        renderMiniCalendar();
      });
    }
  }
  
  return dayEl;
}

function checkDayHasMeetings(date) {
  // Get the day of week (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeek = date.getDay();
  
  // Convert to our meeting day format (0 = Monday, 4 = Friday)
  // Skip weekends
  if (dayOfWeek === 0 || dayOfWeek === 6) return false;
  
  const meetingDay = dayOfWeek - 1; // Convert: Mon=0, Tue=1, etc.
  
  // Check if this date is in the same week as currentWeekStart
  const weekStart = getWeekStart(date);
  const isSameWeek = weekStart.getTime() === currentWeekStart.getTime();
  
  if (isSameWeek) {
    // Check if any meetings are on this day
    return Object.values(meetings).some(m => m.day === meetingDay);
  }
  
  return false;
}

function navigateMiniCalendar(direction) {
  miniCalendarDate = new Date(miniCalendarDate);
  miniCalendarDate.setMonth(miniCalendarDate.getMonth() + direction);
  renderMiniCalendar();
}

// ==================== MEETING TOOLTIP ====================

function getMeetingDateTime(meeting) {
  const date = new Date(currentWeekStart);
  date.setDate(date.getDate() + meeting.day);
  
  const startHours = Math.floor(meeting.startHour);
  const startMinutes = Math.round((meeting.startHour - startHours) * 60);
  const startTime = new Date(date);
  startTime.setHours(startHours, startMinutes, 0, 0);
  
  const endHour = meeting.startHour + meeting.duration;
  const endHours = Math.floor(endHour);
  const endMinutes = Math.round((endHour - endHours) * 60);
  const endTime = new Date(date);
  endTime.setHours(endHours, endMinutes, 0, 0);
  
  return { startTime, endTime };
}

function getRelativeTimeString(diffMs) {
  const absDiff = Math.abs(diffMs);
  const seconds = Math.floor(absDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    const remainingHours = hours % 24;
    if (remainingHours > 0 && days < 7) {
      return `${days}d ${remainingHours}h`;
    }
    return `${days}d`;
  } else if (hours > 0) {
    const remainingMinutes = minutes % 60;
    if (remainingMinutes > 0) {
      return `${hours}h ${remainingMinutes}m`;
    }
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return '<1m';
  }
}

function getTooltipContent(meeting) {
  const now = new Date();
  const { startTime, endTime } = getMeetingDateTime(meeting);
  
  const diffToStart = startTime - now;
  const diffToEnd = endTime - now;
  
  if (diffToStart > 0) {
    // Event hasn't started yet
    return `In ${getRelativeTimeString(diffToStart)}`;
  } else if (diffToEnd > 0) {
    // Event is in progress
    return `${getRelativeTimeString(diffToEnd)} left`;
  } else {
    // Event has ended
    return `${getRelativeTimeString(diffToEnd)} ago`;
  }
}

function showMeetingTooltip(event, meeting) {
  meetingTooltip.textContent = getTooltipContent(meeting);
  meetingTooltip.classList.add('visible');
  updateTooltipPosition(event);
}

function updateTooltipPosition(event) {
  const x = event.clientX;
  const y = event.clientY;
  
  meetingTooltip.style.left = `${x}px`;
  meetingTooltip.style.top = `${y}px`;
}

function hideMeetingTooltip() {
  meetingTooltip.classList.remove('visible');
}

// ==================== TOAST NOTIFICATIONS ====================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  
  // Create new toast element
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = message;
  
  // Add to container (prepend so newest is at bottom visually due to flex-direction)
  container.appendChild(toast);
  
  // Trigger animation after DOM insertion
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);
  
  // Hide and remove toast after 2.5 seconds
  setTimeout(() => {
    toast.classList.remove('visible');
    // Remove from DOM after animation completes
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  }, 2500);
}

// ==================== ASK SUGGESTIONS ====================

function updateAskSuggestions(meeting) {
  const suggestionsContainer = document.getElementById('askSuggestions');
  if (!suggestionsContainer) return;
  
  suggestionsContainer.innerHTML = '';
  
  const { startTime, endTime } = getMeetingDateTime(meeting);
  const now = new Date();
  const isPastMeeting = endTime < now;
  const isFutureMeeting = startTime > now;
  
  // Define suggestions based on meeting timing
  const suggestions = [];
  
  if (isFutureMeeting) {
    suggestions.push({
      label: 'Prep meeting',
      prompt: `Help me prepare for my upcoming meeting "${meeting.title}". What should I know about the participants and what talking points should I cover?`
    });
  } else if (isPastMeeting) {
    suggestions.push({
      label: 'Follow up',
      prompt: `Help me draft a follow-up email for my meeting "${meeting.title}". Summarize the key discussion points and next steps.`
    });
  }
  
  // Always show these suggestions
  suggestions.push({
    label: 'Main action points?',
    prompt: `What are the main action items and next steps from "${meeting.title}"?`
  });
  
  if (meeting.participants && meeting.participants.length > 0) {
    suggestions.push({
      label: 'Attendee background',
      prompt: `Give me background information on the attendees of "${meeting.title}". What should I know about them professionally?`
    });
  }
  
  // Render suggestion pills
  suggestions.forEach(suggestion => {
    const pill = document.createElement('button');
    pill.className = 'suggestion-pill';
    pill.textContent = suggestion.label;
    pill.addEventListener('click', () => {
      const askInput = document.getElementById('askInput');
      if (askInput) {
        askInput.value = suggestion.prompt;
        askInput.focus();
      }
    });
    suggestionsContainer.appendChild(pill);
  });
}

function clearAskSuggestions() {
  const suggestionsContainer = document.getElementById('askSuggestions');
  if (suggestionsContainer) {
    suggestionsContainer.innerHTML = '';
  }
}

// ==================== AI CHAT CARD ====================

function initAIChat() {
  const askInput = document.getElementById('askInput');
  const sendBtn = document.getElementById('sendBtn');
  const closeChatBtn = document.getElementById('closeChatBtn');
  const copyResponseBtn = document.getElementById('copyResponseBtn');
  const regenerateBtn = document.getElementById('regenerateBtn');
  
  // Handle send button click
  if (sendBtn) {
    sendBtn.addEventListener('click', handleAskSubmit);
  }
  
  // Handle Enter key in input
  if (askInput) {
    askInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleAskSubmit();
      }
    });
  }
  
  // Handle close button
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', closeAIChat);
  }
  
  // Handle copy button
  if (copyResponseBtn) {
    copyResponseBtn.addEventListener('click', copyAIResponse);
  }
  
  // Handle regenerate button
  if (regenerateBtn) {
    regenerateBtn.addEventListener('click', regenerateResponse);
  }
}

function handleAskSubmit() {
  const askInput = document.getElementById('askInput');
  const query = askInput?.value.trim();
  
  if (!query) return;
  
  // Store the query for potential regeneration
  window.lastAIQuery = query;
  
  // Show the AI chat card with loading state
  showAIChat();
  showAILoading();
  
  // Clear the input
  askInput.value = '';
  
  // Hide suggestions when chat is active
  const suggestions = document.getElementById('askSuggestions');
  if (suggestions) {
    suggestions.style.display = 'none';
  }
  
  // Simulate AI response after a delay
  setTimeout(() => {
    generateAIResponse(query);
  }, 1500);
}

function showAIChat() {
  const chatCard = document.getElementById('aiChatCard');
  const disclaimer = document.querySelector('.ai-chat-disclaimer');
  
  if (chatCard) {
    chatCard.classList.add('visible');
  }
  if (disclaimer) {
    disclaimer.classList.add('visible');
  }
}

function closeAIChat() {
  const chatCard = document.getElementById('aiChatCard');
  const disclaimer = document.querySelector('.ai-chat-disclaimer');
  const suggestions = document.getElementById('askSuggestions');
  const content = document.getElementById('aiChatContent');
  
  if (chatCard) {
    chatCard.classList.remove('visible');
  }
  if (disclaimer) {
    disclaimer.classList.remove('visible');
  }
  if (suggestions) {
    suggestions.style.display = 'flex';
  }
  if (content) {
    content.innerHTML = '';
  }
  
  // Clear the stored query
  window.lastAIQuery = null;
}

function showAILoading() {
  const content = document.getElementById('aiChatContent');
  if (content) {
    content.innerHTML = `
      <div class="loading">
        <div class="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>Thinking...</span>
      </div>
    `;
  }
}

function generateAIResponse(query) {
  const content = document.getElementById('aiChatContent');
  if (!content) return;
  
  // Get the current meeting for context
  const meeting = selectedMeetingId ? meetings[selectedMeetingId] : null;
  const meetingTitle = meeting?.title || 'this meeting';
  const companyName = meeting?.company?.name || 'the company';
  
  // Generate contextual response based on the query
  let response = '';
  
  if (query.toLowerCase().includes('prep') || query.toLowerCase().includes('prepare')) {
    response = generatePrepResponse(meeting, meetingTitle, companyName);
  } else if (query.toLowerCase().includes('follow up') || query.toLowerCase().includes('follow-up')) {
    response = generateFollowUpResponse(meeting, meetingTitle);
  } else if (query.toLowerCase().includes('action') || query.toLowerCase().includes('next step')) {
    response = generateActionItemsResponse(meeting, meetingTitle);
  } else if (query.toLowerCase().includes('background') || query.toLowerCase().includes('attendee')) {
    response = generateAttendeeResponse(meeting);
  } else {
    response = generateGeneralResponse(query, meeting, meetingTitle, companyName);
  }
  
  content.innerHTML = response;
}

function generatePrepResponse(meeting, meetingTitle, companyName) {
  const participants = meeting?.participants?.map(p => p.name).join(', ') || 'the attendees';
  
  return `
    <p>Here's how to prepare for <strong>${meetingTitle}</strong>:</p>
    
    <ol>
      <li><strong>Review Past Interactions:</strong> Check previous meeting notes and email threads with ${companyName} to understand the relationship history and any ongoing discussions.</li>
      <li><strong>Research Updates:</strong> Look for recent news about ${companyName} — leadership changes, product launches, or market developments that could be relevant.</li>
      <li><strong>Prepare Talking Points:</strong> Based on the meeting agenda, outline 3-5 key topics you want to cover and questions you need answered.</li>
      <li><strong>Know Your Attendees:</strong> Review profiles of ${participants} to understand their roles and potential concerns.</li>
    </ol>
    
    <div class="ai-summary-section">
      <h3>Summary</h3>
      <p>Focus on understanding ${companyName}'s current priorities and pain points. Come prepared with specific examples and data points that demonstrate value. Have clear next steps ready to propose at the end of the meeting.</p>
    </div>
  `;
}

function generateFollowUpResponse(meeting, meetingTitle) {
  return `
    <p>Here's a suggested follow-up for <strong>${meetingTitle}</strong>:</p>
    
    <p><strong>Subject:</strong> Follow-up: ${meetingTitle} - Next Steps</p>
    
    <p>Hi team,</p>
    
    <p>Thank you for taking the time to meet today. I wanted to summarize our discussion and outline the next steps we agreed upon:</p>
    
    <ol>
      <li><strong>Key Discussion Points:</strong> We covered the main priorities and identified areas for collaboration.</li>
      <li><strong>Action Items:</strong> [List specific action items with owners and deadlines]</li>
      <li><strong>Next Meeting:</strong> We'll reconvene in [timeframe] to review progress.</li>
    </ol>
    
    <p>Please let me know if I missed anything or if you have any questions.</p>
    
    <div class="ai-summary-section">
      <h3>Summary</h3>
      <p>Send this follow-up within 24 hours of the meeting. Be specific about action items and deadlines. Include any relevant attachments or resources discussed.</p>
    </div>
  `;
}

function generateActionItemsResponse(meeting, meetingTitle) {
  const actionItems = meeting?.actionItems || [];
  
  let itemsHtml = '';
  if (actionItems.length > 0) {
    itemsHtml = actionItems.map(item => `<li>${item}</li>`).join('');
  } else {
    itemsHtml = `
      <li>Review discussion points and document key decisions</li>
      <li>Share relevant materials with attendees</li>
      <li>Schedule follow-up meeting if needed</li>
    `;
  }
  
  return `
    <p>Here are the action items from <strong>${meetingTitle}</strong>:</p>
    
    <ol>
      ${itemsHtml}
    </ol>
    
    <div class="ai-summary-section">
      <h3>Summary</h3>
      <p>Prioritize these action items based on urgency and impact. Set calendar reminders for deadlines and follow up with stakeholders to ensure accountability.</p>
    </div>
  `;
}

function generateAttendeeResponse(meeting) {
  const participants = meeting?.participants || [];
  
  if (participants.length === 0) {
    return `
      <p>No external attendees found for this meeting.</p>
      <p>This appears to be an internal meeting or personal time block.</p>
    `;
  }
  
  let attendeesHtml = participants.map(p => `
    <li>
      <strong>${p.name}</strong> — ${p.role}
      <br><small>Consider reviewing their LinkedIn profile and recent company announcements before the meeting.</small>
    </li>
  `).join('');
  
  return `
    <p>Here's background information on the attendees:</p>
    
    <ul>
      ${attendeesHtml}
    </ul>
    
    <div class="ai-summary-section">
      <h3>Summary</h3>
      <p>Understanding each attendee's role and priorities will help you tailor your message and anticipate questions. Look for common connections or shared interests that could help build rapport.</p>
    </div>
  `;
}

function generateGeneralResponse(query, meeting, meetingTitle, companyName) {
  return `
    <p>Based on your question about <strong>${meetingTitle}</strong>:</p>
    
    <p>${query}</p>
    
    <ol>
      <li><strong>Context:</strong> This meeting is scheduled with ${companyName}. Review the meeting details and participant list for full context.</li>
      <li><strong>Recommendation:</strong> Focus on the key objectives and prepare relevant materials in advance.</li>
      <li><strong>Next Steps:</strong> Consider what outcomes you want from this meeting and plan accordingly.</li>
    </ol>
    
    <div class="ai-summary-section">
      <h3>Summary</h3>
      <p>For more specific guidance, try asking about meeting preparation, follow-up emails, action items, or attendee backgrounds.</p>
    </div>
  `;
}

function copyAIResponse() {
  const content = document.getElementById('aiChatContent');
  if (content) {
    // Get text content without HTML
    const text = content.innerText;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Response copied to clipboard', 'success');
    }).catch(() => {
      showToast('Failed to copy response', 'info');
    });
  }
}

function regenerateResponse() {
  if (window.lastAIQuery) {
    showAILoading();
    setTimeout(() => {
      generateAIResponse(window.lastAIQuery);
    }, 1500);
  }
}

// Initialize AI chat on page load
document.addEventListener('DOMContentLoaded', () => {
  initAIChat();
  initThemeSwitcher();
  initUserDropdown();
});

// ==================== THEME SWITCHER ====================

function initThemeSwitcher() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Add event listener to theme toggle button in user dropdown
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
  }
}

function initUserDropdown() {
  const userProfileBtn = document.getElementById('userProfileBtn');
  const userDropdown = document.getElementById('userDropdown');
  
  if (userProfileBtn && userDropdown) {
    // Toggle dropdown on click
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('visible');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!userDropdown.contains(e.target) && !userProfileBtn.contains(e.target)) {
        userDropdown.classList.remove('visible');
      }
    });
    
    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        userDropdown.classList.remove('visible');
      }
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  showToast(`Switched to ${newTheme} mode`, 'success');
}

// Expose theme functions globally for external use
window.setTheme = setTheme;
window.toggleTheme = toggleTheme;
