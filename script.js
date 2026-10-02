document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form input values
        const studentName = document.getElementById('studentName').value.trim();
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const sessionType = document.getElementById('sessionType').value;

        // Sensei Syed Ibrahim's WhatsApp number (formatted for URL intent)
        const senseiWhatsAppNumber = "919865011897";

        // Construct formatted message specifying Goju-Ryu
        const message = `Hello Sensei Syed Ibrahim,\n\nI want to book a slot at Phoenix Warriors Goju-Ryu Karate Academy.\n\n*Student Name:* ${studentName}\n*Age:* ${age}\n*Contact Number:* ${phone}\n*Booking Type:* ${sessionType}\n\nPlease confirm my slot!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with pre-filled message
        const whatsappURL = `https://wa.me/${senseiWhatsAppNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
});