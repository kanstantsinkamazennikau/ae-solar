export interface ProductPageProps {
  params: {
    id: "Aurora" | "Comet" | "Meteor" | "ShadeStar" | "Neptune" | "Terra";
  };
}

export interface LayoutProps extends ProductPageProps {
  children: React.ReactNode;
}
