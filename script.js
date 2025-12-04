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

// Meeting Data with real participants
const meetings = {
  1: {
    id: 1,
    title: "Quick Sync",
    day: 0, // Monday
    startHour: 10,
    duration: 1,
    type: "default",
    link: "https://meet.google.com/abc-defg-hij",
    participants: [fakeParticipants.alexJohnson],
    company: { name: "Internal", size: "1:1 Meeting" },
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
    type: "team-meeting",
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
    company: { name: "Internal Team", size: "10 participants" },
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
    type: "focus-time",
    link: "",
    participants: [],
    company: { name: "N/A", size: "Personal block" },
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
    type: "one-on-one",
    link: "https://meet.google.com/one-on-one",
    participants: [fakeParticipants.sarahChen],
    company: { name: "Internal", size: "1:1 Meeting" },
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
    type: "selected",
    link: "https://meet.google.com/nap-hzsk-ntx",
    participants: [
      fakeParticipants.gustavAndersson,
      fakeParticipants.yumaTanaka,
      fakeParticipants.jenniferAdams
    ],
    company: { name: "Rox Data Corp", size: "200 employees" },
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
    type: "large-meeting",
    link: "https://meet.google.com/all-hands-dec",
    participants: [
      fakeParticipants.ceoJohn,
      fakeParticipants.ctoMaria,
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown
    ],
    company: { name: "Rox Corp", size: "200+ employees" },
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
    type: "client-call",
    link: "https://meet.google.com/acme-review",
    participants: [
      fakeParticipants.jenniferAdams,
      fakeParticipants.markThompson,
      fakeParticipants.susanWhite
    ],
    company: { name: "Acme Corporation", size: "5,000 employees" },
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
    type: "team-meeting",
    link: "https://meet.google.com/prod-planning",
    participants: [
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown,
      fakeParticipants.emilyWatson,
      fakeParticipants.mikeTorres
    ],
    company: { name: "Internal", size: "4 participants" },
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
    type: "team-meeting",
    link: "https://meet.google.com/sprint-review",
    participants: [
      fakeParticipants.sarahChen,
      fakeParticipants.tomBrown,
      fakeParticipants.mikeTorres,
      fakeParticipants.emilyWatson,
      fakeParticipants.davidKim,
      fakeParticipants.lisaPark
    ],
    company: { name: "Internal", size: "6 participants" },
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
    type: "focus-time",
    link: "",
    participants: [],
    company: { name: "Social", size: "Optional" },
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

// DOM Elements
const monthTitle = document.getElementById('monthTitle');
const dayHeaders = document.getElementById('dayHeaders');
const daysContainer = document.getElementById('daysContainer');
const currentTimeIndicator = document.getElementById('currentTimeIndicator');
const meetingPanel = document.getElementById('meetingPanel');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
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
  
  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Select first meeting by default
  setTimeout(() => {
    const firstEvent = document.querySelector('.calendar-event');
    if (firstEvent) {
      selectMeeting(firstEvent.dataset.id, firstEvent);
    }
  }, 100);
});

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
}

function goToToday() {
  currentWeekStart = getWeekStart(new Date());
  renderCalendar();
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
  event.className = `calendar-event ${meeting.type}`;
  event.dataset.id = meeting.id;
  
  // Calculate position as percentage (6 AM = 0%, 12 AM = 100%)
  const startHour = 6; // Calendar starts at 6 AM
  const totalHours = 18; // 6 AM to 12 AM
  const topPercent = ((meeting.startHour - startHour) / totalHours) * 100;
  const heightPercent = (meeting.duration / totalHours) * 100;
  
  event.style.top = `${topPercent}%`;
  event.style.height = `${heightPercent}%`;
  
  const startTime = formatTime(meeting.startHour);
  const endTime = formatTime(meeting.startHour + meeting.duration);
  
  event.innerHTML = `
    <div class="event-content">
      <span class="event-title">${meeting.title}</span>
      <span class="event-time">${startTime}-${endTime}</span>
    </div>
    ${meeting.participants.length > 0 ? `
    <div class="event-participants">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="10" cy="6" r="3" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      <span>${meeting.company.name}</span>
    </div>
    ` : ''}
  `;
  
  event.addEventListener('click', (e) => {
    e.stopPropagation();
    selectMeeting(meeting.id, event);
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
  
  // Update panel content
  updateMeetingPanel(meeting);
}

function updateMeetingPanel(meeting) {
  // Update title
  document.getElementById('meetingTitle').textContent = meeting.title;
  
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
  updateParticipants(meeting.participants);
  
  // Update company
  document.getElementById('companyName').textContent = meeting.company.name;
  document.getElementById('companySize').textContent = meeting.company.size;
  
  // Update AI summary
  document.getElementById('aiSummaryText').textContent = meeting.summary;
  
  // Update touchpoints
  updateListSection('touchpointsList', meeting.touchpoints, meeting.subItems?.touchpoints);
  
  // Update action items
  updateListSection('actionItemsList', meeting.actionItems);
  
  // Update news
  updateListSection('newsList', meeting.news);
}

function updateParticipants(participants) {
  const container = document.getElementById('participantsList');
  container.innerHTML = '';
  
  if (participants.length === 0) {
    container.innerHTML = `
      <div class="participant">
        <div class="participant-avatar">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#e0e0e0"/>
            <circle cx="18" cy="14" r="6" fill="#999"/>
            <path d="M6 34c0-6 5-10 12-10s12 4 12 10" fill="#999"/>
          </svg>
        </div>
        <div class="participant-info">
          <span class="participant-name">No participants</span>
          <span class="participant-role">Solo meeting or focus time</span>
        </div>
      </div>
    `;
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
        <span class="participant-name">${participant.name}</span>
        <span class="participant-role">${participant.role}</span>
      </div>
      <div class="participant-actions">
        <a href="mailto:${participant.email}" class="action-icon email" title="Send email">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.33" y="2.67" width="13.33" height="10.67" rx="1.33" stroke="#888" stroke-width="1.33"/>
            <path d="M1.33 5.33L8 9.33L14.67 5.33" stroke="#888" stroke-width="1.33" stroke-linecap="round"/>
          </svg>
        </a>
        <a href="${participant.linkedin}" target="_blank" class="action-icon linkedin" title="View LinkedIn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.5 6.5v5M4.5 4v.5M7 11.5v-3c0-1.5 1-2 2-2s1.5.5 1.5 2v3" stroke="#0077b5" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="1" y="1" width="14" height="14" rx="2" stroke="#0077b5" stroke-width="1.33"/>
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
  
  switch (e.key.toLowerCase()) {
    case 't':
      goToToday();
      break;
    case 'arrowleft':
      if (e.shiftKey) {
        navigateWeek(-1);
      }
      break;
    case 'arrowright':
      if (e.shiftKey) {
        navigateWeek(1);
      }
      break;
    case 'j':
      selectNextEvent();
      break;
    case 'k':
      selectPrevEvent();
      break;
    case 'escape':
      deselectAll();
      break;
    case 'n':
      navigateWeek(1);
      break;
    case 'p':
      navigateWeek(-1);
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
}
