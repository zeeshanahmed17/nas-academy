import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  highlightedWord?: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
}

export default function PageHeader({
  title,
  subtitle,
  highlightedWord,
  breadcrumbs
}: PageHeaderProps) {
  // Replace the highlighted word with a span that has a different color
  const titleWithHighlight = highlightedWord
    ? title.replace(
        highlightedWord,
        `<span class="text-brand-yellow">${highlightedWord}</span>`
      )
    : title;

  return (
    <div className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-16 md:py-24">
      <div className="container-custom">
        {breadcrumbs && (
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-200 hover:text-white"
                  >
                    <svg
                      className="mr-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <Link
                        href={breadcrumb.href}
                        className="ml-1 text-sm font-medium text-gray-200 hover:text-white md:ml-2"
                      >
                        {breadcrumb.label}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}

        <div className={`${breadcrumbs ? '' : 'text-center'}`}>
          <h1
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
          ></h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 