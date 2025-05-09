export function getTodayDateRange(onlyToday: boolean) {
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];
  const startOfToday = `${todayDate}T00:00:00Z`;
  const endOfToday = `${todayDate}T23:59:59Z`;

  const timeParams = `&startDateTime=${startOfToday}`;
  return onlyToday ? `${timeParams}&endDateTime=${endOfToday}` : timeParams;
}
