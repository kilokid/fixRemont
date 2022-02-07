export const sendForm = () =>
{
	const form = document.querySelector('.form-content');
	const succesfuly = document.querySelector('.successfuly');
	const inputEmail = form.querySelector('input[type="email"]');
	const emailLabel = form.querySelector('.email');
	const inputName = form.querySelector('input[name="name"]');
	const subscrBtn = form.querySelector('.btn-submit');

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const validateEmail = ( value ) =>
	{
		return EMAIL_REGEXP.test(value);
	}

	const updateInput = () =>
	{
		if ( !validateEmail( inputEmail?.value ) )
		{
			inputEmail.classList.add('input-error');
			emailLabel.classList.add('label-error');
		}
		else {
			inputEmail.classList.remove('input-error');
			emailLabel.classList.remove('label-error');
		}
	}

	subscrBtn?.addEventListener('click', ( event ) =>
		{
			event.preventDefault();

			if ( inputEmail?.value === '' && inputName?.value === '' )
			{
				inputEmail.classList.add('input-error');
				inputName.classList.add('input-error');
				return;
			}
			else if ( inputEmail?.value === '' || !validateEmail( inputEmail?.value ) )
			{
				inputEmail.classList.add('input-error');
				inputName.classList.remove('input-error');
				return;
			}
			else if ( inputName?.value === '' )
			{
				inputName.classList.add('input-error');
				inputEmail.classList.remove('input-error');
				return;
			}

			succesfuly.style.display = 'flex';
			form.style.display = 'none';
		}
	);

	inputEmail?.addEventListener( 'input', updateInput );

	document.addEventListener( 'input', ( event ) =>
		{
			const target = event.target;

			if ( target.closest('#form-name') || target.placeholder === 'Имя и фамилия*' )
			{
				target.value = target.value.replace(/[^а-яё ]+$/gi, '');
				target.classList.remove('input-error');
			}
			else if ( target.value === '' )
			{
				target.classList.add('input-error');
			}

			if ( target.closest('#form-email') || target.placeholder === 'E-mail адрес*' )
			{
				target.value = target.value.replace(/[^a-z@. ]+$/gi, '');
			}

			if ( target.closest('#form-phone') || target.placeholder === 'Телефон' )
			{
				target.value = target.value.replace(/\D/gi, '').substr(0,11);
			}
		}
	);
}
