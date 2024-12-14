export const generateSlug = (title:string):string =>  {
    // Convert the title to lowercase
    let slug = title.toLowerCase();
    // Replace special characters with a space
    slug = slug.replace(/[^a-z0-9\s-]/g, '');
    // Replace whitespace and hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');
    // Trim hyphens from the start and end of the slug
    slug = slug.replace(/^-+|-+$/g, '');
    return slug; 
}