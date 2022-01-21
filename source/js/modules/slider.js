export const slider = () =>
{
	const slidesField = document.querySelector('.slider-content');
	const slides = document.querySelectorAll('.slide');
	const slidesDescription = document.querySelectorAll('.slide-description');
	const btnPrev = document.getElementById('btn-prev');
	const btnNext = document.getElementById('btn-next');
	let width = '880px';

	let slideIndex = 1;
	let offset = 0;

	const deleteNotDigits = ( str ) =>
	{
		return +str.replace(/\D/g, '');
	}

	const showSlide = ( i = 1 ) =>
	{
		if ( i >= slides.length )
		{
			slideIndex = 0;
			i = slideIndex;
		}
		else if ( i < 0 )
		{
			slideIndex = slides.length - 1;
			i = slideIndex;
		}

		slides[i].classList.add('slide-active');

		slidesDescription[i].classList.add('slide-description-active');
	}

	const hideSlide = () =>
	{
		slides.forEach(slide => slide.classList.remove('slide-active'));

		slidesDescription.forEach(descp => descp.classList.remove('slide-description-active'));
	}

	hideSlide();
	showSlide(slideIndex);

	slidesField.style.width = 45 * slides.length + '%';

	slides.forEach( slide =>
		{
			slide.style.width = width;
		}
	);

	btnNext.addEventListener( 'click', () =>
		{
			if ( offset === deleteNotDigits(width) * ( slides.length - 1 ) )
			{
				offset = 0;
			}
			else
			{
				offset += deleteNotDigits(width);
			}

			hideSlide();
			showSlide(++slideIndex);

			if ( slideIndex === 0 ) {
				slidesField.style.transform = `translateX(${width})`;
			}
			else
			{
				slidesField.style.transform = `translateX(-${offset}px)`;
			}


		}
	);

	btnPrev.addEventListener( 'click', () =>
		{
			if ( offset === 0 )
			{
				offset = deleteNotDigits(width) * ( slides.length - 1)
			}
			else
			{
				offset -= deleteNotDigits(width);
			}


			hideSlide();
			showSlide(--slideIndex);

			if ( slideIndex === slides.length - 1 ) {
				slidesField.style.transform = `translateX(-${offset}px)`;
			}
			else if ( slideIndex === 0 )
			{
				slidesField.style.transform = `translateX(${width})`;
			}
			else
			{
				slidesField.style.transform = `translateX(${offset}px)`;
			}
		}
	);
}
