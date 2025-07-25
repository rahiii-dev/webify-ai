import type { WebPage } from "../types";

interface WebPageListProps {
  pages: WebPage[];
}

const WebPageList = ({ pages }: WebPageListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <div
          key={page.id}
          className="border p-4 rounded-lg shadow-sm bg-card"
        >
          <h3 className="text-lg font-semibold">{page.title}</h3>
          <p className="text-sm text-muted-foreground">Created: {page.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default WebPageList;
