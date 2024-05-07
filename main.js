(()=>{"use strict";function e(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled","")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",""))}function t(e){var t,n,o,a;e.classList.add("popup_is-opened"),window.addEventListener("keyup",r),t=e,n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},o=Array.from(t.querySelectorAll(n.inputSelector)),a=t.querySelectorAll(".form__input-error"),o.forEach((function(e){e.classList.remove(n.inputErrorClass)})),a.forEach((function(e){e.classList.remove(n.errorClass),e.textContent=""}))}function n(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keyup",r)}function r(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-13",authoriseHeader:{authorization:"f465fb02-51a8-4242-b3a2-1fc5d06a9ddb"},headers:{authorization:"f465fb02-51a8-4242-b3a2-1fc5d06a9ddb","Content-Type":"application/json"}};function a(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}var u=document.querySelector("#card-template").content,c=document.querySelector(".popup_type_confirm"),i=document.querySelector(".popup__button[name=confirm]");function l(e,n,r,o){var a=u.querySelector(".card").cloneNode(!0),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__delete-button"),d=a.querySelector(".card__image"),p=a.querySelector(".card__title"),_=a.querySelector(".card__like-button-quantity");return p.textContent=e.name,d.src=e.link,d.alt=e.name,_.textContent=e.likes.length,a.id=e._id,o?s.addEventListener("click",(function(e){i.dataset.cardId=e.target.nextSibling.parentElement.id,t(c)})):s.style.display="none",l.addEventListener("click",(function(){return n(l,a,e._id)})),d.addEventListener("click",(function(){return r(e.name,e.link)})),a}function s(e,t,n){var r,u=t.querySelector(".card__like-button-quantity");e.classList.contains("card__like-button_is-active")?(r=n,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.authoriseHeader}).then((function(e){return a(e)}))).then((function(e){u.textContent=e.likes.length})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.authoriseHeader}).then((function(e){return a(e)}))}(n).then((function(e){u.textContent=e.likes.length})),e.classList.toggle("card__like-button_is-active")}function d(e){document.getElementById(e).remove(),n(c),function(e){fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.authoriseHeader}).then((function(e){return a(e)}))}(e)}i.addEventListener("click",(function(e){return d(e.target.dataset.cardId)}));var p,_=document.querySelector(".places__list"),f=document.querySelectorAll(".popup"),m=document.querySelector(".popup_type_edit-avatar"),v=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_image"),S=document.querySelector(".popup__caption"),b=document.querySelector(".popup__image"),q=document.querySelector(".popup__button[name=save-avatar]"),E=document.querySelector(".profile__avatar-button"),C=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),L=document.querySelector(".profile__description"),g=document.querySelector(".profile__avatar"),x=document.querySelector(".profile__title"),A=document.querySelector(".popup__form[name=edit-profile]"),w=document.querySelector(".popup__input[name=name]"),U=document.querySelector(".popup__input[name=description]"),B=document.querySelector(".popup__form[name=new-place]"),H=document.querySelector(".popup__input[name=place-name]"),T=document.querySelector(".popup__input[name=addLink]"),D=document.querySelector(".popup__form[name=new-avatar]"),I=document.querySelector(".popup__input[name=avatar-link]");function P(e,n){b.src=n,b.alt=e,S.textContent=e,t(h)}!function(e){e.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return n(e)})),e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&n(e)}))}))}(f),E.addEventListener("click",(function(){return t(m)})),C.addEventListener("click",(function(){t(v),w.value=x.textContent,U.value=L.textContent})),k.addEventListener("click",(function(){return t(y)})),D.addEventListener("submit",(function(e){var t;e.preventDefault(),q.textContent="Сохранение...",(t=I.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:t})}).then((function(e){return a(e)}))).then((function(){g.style.backgroundImage="url(".concat(I.value,")"),n(m),q.textContent="Сохранить",I.value=""}))})),A.addEventListener("submit",(function(e){var t,r;e.preventDefault(),x.textContent=w.value,L.textContent=U.value,n(v),t=w.value,r=U.value,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:t,about:r})}).then((function(e){return a(e)}))})),B.addEventListener("submit",(function(e){var t,r;console.log(e),e.preventDefault(),(t=H.value,r=T.value,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:t,link:r})}).then((function(e){return a(e)}))).then((function(e){var t=l(e,s,P,d);_.prepend(t)})),n(y),B.reset()})),p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(p.formSelector)).forEach((function(t){!function(t,n){var r=Array.from(t.querySelectorAll(n.inputSelector)),o=t.querySelector(n.submitButtonSelector);e(r,o,n),r.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(t,e,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(t,e,e.validationMessage,n)}(a,t,n),e(r,o,n)}))}))}(t,p)})),Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{headers:o.authoriseHeader}).then((function(e){return a(e)})),fetch("".concat(o.baseUrl,"/cards"),{headers:o.authoriseHeader}).then((function(e){return a(e)}))]).then((function(e){var t=e[0],n=e[1];x.textContent=t.name,L.textContent=t.about,g.style.backgroundImage="url(".concat(t.avatar,")"),n.forEach((function(e){var n;n=e.owner._id===t._id?l(e,s,P,d):l(e,s,P),e.likes.some((function(e){return e._id===t._id}))&&n.querySelector(".card__like-button").classList.toggle("card__like-button_is-active"),_.append(n)}))}))})();