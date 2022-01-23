export const slider = () =>
{
	const slidesField = document.querySelector('.slider-content');
	const slides = document.querySelectorAll('.slide');
	const slidesDescription = document.querySelectorAll('.slide-description');
	const btnPrev = document.getElementById('btn-prev');
	const btnNext = document.getElementById('btn-next');
	let slideWidth = 880;

	let slideIndex = 1;
	let offset = 0;

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
			slide.style.width = `${slideWidth}px`;
		}
	);

	btnNext.addEventListener( 'click', () =>
		{
			hideSlide();
			showSlide(++slideIndex);
			offset = slideWidth * slideIndex * - 1 + slideWidth;
			slidesField.style.transform = `translateX(${offset}px)`;
		}
	);

	btnPrev.addEventListener( 'click', () =>
		{
			hideSlide();
			showSlide(--slideIndex);
			offset = slideWidth * slideIndex * -1 + slideWidth;
			slidesField.style.transform = `translateX(${offset}px)`;
		}
	);
}
