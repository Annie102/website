// each block will have a wrapper with 60 margin bottom
export default function BlockWrapper({ children }) {
    return <section className="mb-16">{children}</section>;
  }