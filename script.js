// ซ่อน Pop-up หลังจาก 3 วินาทีและแสดงหน้าเว็บหลัก
document.getElementById('popupIntro').addEventListener('click', function() {
    window.location.href = "home.html";
});


/**เลือกเวลา */
function updateTimeOptions() {
    const daySelect = document.getElementById('day');
    const timeContainer = document.getElementById('timeContainer');

    // ล้างตัวเลือกเวลาเก่าทุกครั้งที่เปลี่ยนวัน
    timeContainer.innerHTML = '';

    // เช็คว่ามีการเลือกวันหรือไม่
    if (daySelect.value === "") {
        return; // ถ้าไม่เลือกวัน, ไม่แสดงเวลา
    }

    // กำหนดเวลาแต่ละวัน
    const weekdayTimes = [
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", 
        "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
    ];

    const weekendTimes = [
        "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", 
        "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", 
        "11:00 PM"
    ];

    let timeOptions;

    // เช็ควันว่าเป็นวันธรรมดาหรือวันเสาร์-อาทิตย์
    if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(daySelect.value)) {
        timeOptions = weekdayTimes;
    } else if (["saturday", "sunday"].includes(daySelect.value)) {
        timeOptions = weekendTimes;
    }

    // สร้าง <select> สำหรับเวลาใหม่
    const timeSelect = document.createElement('select');
    timeSelect.classList.add('form-select');
    timeSelect.id = 'time';
    timeSelect.required = true;

    // เพิ่ม <option> สำหรับเวลา
    timeOptions.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    // เพิ่ม <select> ลงใน timeContainer
    timeContainer.appendChild(timeSelect);
}
