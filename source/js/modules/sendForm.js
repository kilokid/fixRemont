export const sendForm = () =>
{
	const form = document.querySelector('.form-content');
	const succesfuly = document.querySelector('.successfuly');
	const inputEmail = document.querySelector('input[type="email"]');
	const emailLabel = document.querySelector('.email');
	const inputName = document.querySelector('input[name="name"]');
	const subscrBtn = document.getElementById('btn-submit');

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const validateEmail = ( value ) =>
	{
		return EMAIL_REGEXP.test(value);
	}

	const updateInput = () =>
	{
		if ( !validateEmail(inputEmail.value) )
		{
			inputEmail.style.borderColor = '#F9572E';
			emailLabel.style.color = '#F9572E';
		}
		else {
			inputEmail.style.borderColor = '#666666';
			emailLabel.style.color = '#666666';
		}
	}

	inputEmail.addEventListener( 'input', updateInput );

	subscrBtn.addEventListener('click', ( event ) =>
		{
			event.preventDefault();

			if ( inputEmail.value === '' || inputName.value === '' )
			{
				inputEmail.style.borderColor = '#F9572E';
				inputName.style.borderColor = '#F9572E';
				return;
			}

			succesfuly.style.display = 'flex';
			form.style.display = 'none';
		}
	);

	document.addEventListener( 'input', ( event ) =>
		{
			const target = event.target;

			if ( target.closest('#form-name') || target.placeholder === 'Имя и фамилия*' )
			{
				target.value = target.value.replace(/[^а-яё ]+$/gi, '');
				target.style.borderColor = '#666666';
			}
			else if ( target.value === '' )
			{
				target.style.borderColor = '#F9572E';
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
