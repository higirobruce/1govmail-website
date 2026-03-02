# Changelog

All notable changes to this project will be documented in this file.

## [App v1.5.0] - 2026-03-02

### New Features (1Gov Mail app)

- **Documents** — a full-featured document editor inside the app: create, edit, and delete rich-text documents with formatting, checklists, tables, and code blocks
- **Real-time collaboration** — multiple users can edit a document simultaneously; changes merge instantly with no conflicts and each collaborator's cursor appears in a distinct colour
- **Document sharing** — share any document as a read-only link; recipients can open it directly without an account
- **Live title sync** — document title changes appear immediately for all collaborators without a page refresh
- **Contact groups** — organise contacts into named groups for easier addressing and management
- **Drag email to task or event** — drag any message from the inbox onto the Tasks or Calendar panel to create a pre-filled task or event in one gesture
- **Theme switcher** — choose Light, Dark, or System (follows your OS) from Settings
- **Desktop notifications** — native OS notifications for new mail and task reminders
- **Keyboard shortcuts** — compose (C), reply (R), archive (E), delete (#), and folder navigation

### Improvements

- Task board columns have refreshed backgrounds and card styling for better readability
- Consistent DateTimePicker across all scheduling inputs (snooze, scheduled send, task due dates)
- Calendar layout improved; sidebar folders load reliably on slow connections

### Bug Fixes

- Document share dialog: URL field is now a proper text input, making it easy to select and copy the link

---

## [App v1.3.0] - 2026-03-01

### New Features (1Gov Mail app)

- **Interactive onboarding tour** — step-by-step guided walkthrough launched from the sidebar; covers inbox, tasks, calendar, and contacts in under a minute
- **Screenshots section** — homepage now includes Calendar, Free-Busy, and Tasks preview tabs in "See it in action"

### Improvements

- Confirmation modals replace browser alert dialogs for all destructive actions (delete task, event, contact, folder, signature)
- Calendar now opens to Agenda view by default
- Task edit sheet pre-fills all fields correctly when reopening a saved task
- Features and descriptions on homepage updated to reflect full v1.3.0 capabilities

### Bug Fixes

- Calendar RSVP (Accept / Decline / Tentative) no longer triggers a Zimbra server NullPointerException

---

## [App v1.2.0] - 2026-02-28

### New Features (1Gov Mail app)

- **Recurring tasks** — set a task to repeat daily, weekly, monthly, or yearly; the next occurrence is created automatically when you mark it done
- **Task reminders** — get an email reminder 15 minutes, 30 minutes, 1 hour, or 1 day before a task is due
- **File attachments** — attach up to 5 files (5 MB each) to any task; download or delete from the task panel
- **My Day tab** — new "My Day" tab in Tasks shows everything due today with a live count badge
- **Bulk actions** — select multiple tasks with checkboxes and use the floating action bar to mark done or delete in one go
- **Task sheet** — creating and editing tasks now opens in a slide-in panel for better use of screen space
- **Multi-attendee availability panel** — overlay up to 5 colleagues' free/busy schedules on a shared timeline
- **Batch free/busy lookup** — fetches all attendees' schedules in a single request for instant results
- **Find-a-time** — highlights open slots where all selected attendees are free, with suggested meeting times
- **Working hours overlay** — shaded bands show each person's configured business hours on the timeline
- **Per-user color coding** — distinct colors on the availability timeline for quick visual parsing

## [App v1.1.0] - 2026-02-27

### New Features (1Gov Mail app)

- **Task management** — create, prioritise, and track tasks directly in the app
- **Subtasks** — break tasks into steps with a per-task progress counter and inline completion toggle
- **Task comments** — threaded comments with author avatars and delete
- **Kanban board** — drag tasks between To Do, In Progress, Done, and Cancelled columns
- **Sort & filter** — sort by date and priority; filter by status and overdue
- **Link tasks to emails** — attach an email subject to a task for full context
- **Create tasks from email** — open a task sheet directly from a thread with the subject pre-filled
- **Assign tasks** — assign to a colleague with an automatic notification email sent via Zimbra
- **Image support in signatures** — embed inline images that render correctly in all mail clients
- **Image attachments** — file attachments now support images with correct inline rendering

### Improvements

- Thread view redesigned with a vertical timeline spine — avatar nodes, collapsed single-line rows, and expanded cards
- Email quote stripping removes embedded reply history from Outlook, Apple Mail, Gmail, and calendar invite formats
- Sent messages persist immediately in the Sent folder without requiring a manual sync
- Signature selection and cache invalidation improved — correct signature loads on compose open
- Availability timeline tooltips show busy/tentative block details and attendee name on hover

### Bug Fixes

- Locally deleted drafts no longer reappear after folder refresh

## [0.1.0] - 2026-02-27

### Styles

- Switch color scheme from dark to light mode

### Bug Fixes

- Fix download links
- Fix download page
- Upgrade Next.js
- Fix Vercel configuration

### Initial Release

- Initial commit
