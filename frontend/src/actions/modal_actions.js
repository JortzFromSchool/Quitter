export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, habitId) => ({
    type: OPEN_MODAL,
    modal,
    habitId
  }
);

export const closeModal = () => (
  {
    type: CLOSE_MODAL
  }
);