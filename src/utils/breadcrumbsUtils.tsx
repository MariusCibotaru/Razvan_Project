import { Page } from "../components/navbar/NavBar";

const flattenPages = (pages: Page[], parentTitles: string[] = []): [string, string[]][] => {
  let flatList: [string, string[]][] = [];
  
  for (const page of pages) {
    const currentPath = page.link || '';
    const titles = [...parentTitles, page.title];
    flatList.push([currentPath, titles]);

    if (page.subpages) {
      flatList = flatList.concat(flattenPages(page.subpages, titles));
    }
  }
  
  return flatList;
};

const findPageTitles = (pathname: string, pages: Page[]): string[] => {
  const flattenedPages = flattenPages(pages);
  
  for (const [path, titles] of flattenedPages) {
    if (path === pathname) {
      return titles;
    }
  }
  
  return [];
};

export default findPageTitles;