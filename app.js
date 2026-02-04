function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.textContent = message;
    
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '12px 24px',
        backgroundColor: isError ? '#880101' : '#FFF', // Accent Red for error, White for success
        color: isError ? '#FFF' : '#000',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// 2. SendMail Function (Handles Admin Alert + Client Auto-Responder)
async function sendMail(event) {
    if (event) event.preventDefault();

    const submitBtn = document.getElementById("myButton");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Defensive check: ensure form elements exist on the page
    if (!nameInput || !emailInput || !messageInput || !submitBtn) return;

    // --- Start Loading State ---
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "SENDING...";
    submitBtn.style.opacity = "0.6";
    submitBtn.style.cursor = "not-allowed";

    const templateParams = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };

    try {
        // Trigger Email 1: Internal Notification to You
        await emailjs.send("service_nb5ri47", "template_h5tp5ih", templateParams);
        

        // Success Sequence
        showToast("Success: Message and confirmation sent.");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        showToast("Error: Service temporarily unavailable.", true);
    } finally {
        // --- Reset Button State ---
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    }
}

// 3. Global Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Form Submission Listener (Check if button exists)
    const submitBtn = document.getElementById("myButton");
    if (submitBtn) {
        submitBtn.addEventListener("click", sendMail);
    }

    // 2. Logo Hover Interaction (Visual Spring Effect)
    const logo = document.querySelector('.topnav img');
    if (logo) {
        logo.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    }

    // 3. Navigation link tracking
    const auditBtn = document.querySelector('.btn-primary');
    if (auditBtn) {
        console.log("System initialized: Navigation ready.");
    }
});