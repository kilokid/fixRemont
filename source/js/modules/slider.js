export const slider = () =>
{
	const slider = document.querySelector('.slider');
	const slidesField = slider.querySelector('.slider-content');
	const slides = slider.querySelectorAll('.slide');
	const slide = slider.querySelector('.slide');
	const slidesDescription = slider.querySelectorAll('.slide-description');
	const btnPrev = slider.querySelector('.btn-prev');
	const btnNext = slider.querySelector('.btn-next');
	let slideIndex = 1;
	let offset = 0;

	const slidesFieldTransform = () =>
	{
		if ( document.body.clientWidth <= 1200 )
		{
			slidesField.style.width = `${100 * slides.length}%`;

			slidesField.style.transform = `translateX(-${slide.getBoundingClientRect().width}px)`;
		}
		else
		{
			slidesField.style.width = `${50 * slides.length}%`;
		}
	}

	slidesFieldTransform();

	const debounce = ( func, time = 100 ) =>
	{
		let timer;
		return function( event )
		{
			if( timer )
			{
				clearTimeout( timer );
			}
			timer = setTimeout( func, time, event );
		};
	}

	window.addEventListener( "resize", debounce( slidesFieldTransform, 150 ) );


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

	btnNext.addEventListener( 'click', () =>
		{
			const actualSlideWidth = slide.getBoundingClientRect().width;

			hideSlide();
			showSlide(++slideIndex);

			offset = document.body.clientWidth <= 1200 ?
				actualSlideWidth * slideIndex * - 1 :
				actualSlideWidth * slideIndex * - 1 + actualSlideWidth;

			slidesField.style.transform = `translateX(${offset}px)`;
		}
	);

	btnPrev.addEventListener( 'click', () =>
		{
			const actualSlideWidth = slide.getBoundingClientRect().width;

			hideSlide();
			showSlide(--slideIndex);

			offset = document.body.clientWidth <= 1200 ?
				actualSlideWidth * slideIndex * - 1 :
				actualSlideWidth * slideIndex * - 1 + actualSlideWidth;

			slidesField.style.transform = `translateX(${offset}px)`;
		}
	);
}
