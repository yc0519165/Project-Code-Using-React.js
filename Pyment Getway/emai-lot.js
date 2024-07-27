document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;
  
    // Simple validation
    if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '' || amount.trim() === '') {
      document.getElementById('payment-status').innerText = 'Please fill out all fields';
    } else {
      // You would normally make an API call to a payment gateway here
      // For the sake of simplicity, we'll just display a success message
      document.getElementById('payment-status').innerText = `Payment of $${amount} processed successfully`;
      // Clear form fields after successful payment
      document.getElementById('payment-form').reset();
    }
  });
  