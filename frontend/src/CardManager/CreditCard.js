// Data Layer
class CreditCardAPI {
  async fetchCreditCardList() {
    const apiData = [
      {
        id: 'ff646567-484e-4eb7-961f-977f7c728eb9',
        cardNumber: '1111111111111111',
        cardHolder: 'Hassan Saeed',
        cardMonth: '01',
        cardYear: '2023',
        cardCvv: '1111',
      },
      {
        id: 'b8262cc8-6506-46f2-925a-819729b224ec',
        cardNumber: '2222222222222222',
        cardHolder: 'John Doe',
        cardMonth: '02',
        cardYear: '2024',
        cardCvv: '2222',
      },
    ];
    let creditCardsList = [];

    if (localStorage.getItem('cards')) {
      const localStorageData = JSON.parse(localStorage.getItem('cards') || '');
      creditCardsList = [...localStorageData];
    } else {
      creditCardsList = [...apiData];
      updateLocalStorageCards(creditCardsList);
    }

    return creditCardsList;
  }
}

// Business Layer
async function fetchCreditCardList() {
  const api = new CreditCardAPI();
  return api.fetchCreditCardList();
}

function updateLocalStorageCards(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

module.exports = {
  fetchCreditCardList,
  updateLocalStorageCards,
};
