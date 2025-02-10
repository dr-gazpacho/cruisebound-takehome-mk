export function formatDateRange(date1: string, date2: string): string {
    const firstDate = new Date(date1 + 'T00:00:00');
    const secondDate = new Date(date2 + 'T00:00:00');
    
    const month1 = firstDate.getMonth();
    const month2 = secondDate.getMonth();
    const year1 = firstDate.getFullYear();
    const year2 = secondDate.getFullYear();
    const day1 = firstDate.getDate();
    const day2 = secondDate.getDate();
    
    const monthName1 = firstDate.toLocaleString('en-US', { month: 'long' });
    const monthName2 = secondDate.toLocaleString('en-US', { month: 'long' });

    if (month1 === month2 && year1 === year2) {
        return `${monthName1} ${day1}-${day2}, ${year1}`;
    }
    
    return `${monthName1} ${day1}-${monthName2} ${day2}, ${year2}`;
}