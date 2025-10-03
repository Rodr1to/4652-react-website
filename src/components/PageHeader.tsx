interface PageHeaderProps {
    pageTitle: string;
    pageSubtitle: string;
}


const PageHeader = (props: PageHeaderProps) => {
  return (
    <header id="page-header" className="shadow-lg py-5">
        <div className="max-w-7xl mx-auto px-3 py-3">
            <h1>{props.pageTitle}</h1>
            <p>{props.pageSubtitle}</p>
        </div>
    </header>
  )
}

export default PageHeader