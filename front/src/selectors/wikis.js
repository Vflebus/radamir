export const cleanTitleSlug = (title) => {
  const cleanTitle = title.replaceAll(/[^A-zÀ-ü0-9\s_-]/g, "")
        
  const slug = cleanTitle
                .replaceAll(" ", "-")
                .toLowerCase();

  return { cleanTitle, slug }
};