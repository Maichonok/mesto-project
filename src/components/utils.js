export function loading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

export function disabledBtn(btn) {
  btn.classList.add("popup-btn_disabled");
  btn.disabled = true;
}
