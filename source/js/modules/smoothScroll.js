export const smoothScrool = () =>
{
    const smoothScrollElems = document.querySelectorAll(
      'a[href^="#"]:not(a[href=""])'
    );

    smoothScrollElems?.forEach((link) =>
		{
			link.addEventListener("click", ( event ) =>
				{
					event.preventDefault();
					const id = link?.getAttribute("href").slice(1);

					document.getElementById( id )?.scrollIntoView(
						{
							behavior: "smooth",
						}
					);
				}
			);
		}
	);
};
