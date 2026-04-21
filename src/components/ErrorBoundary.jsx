import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Lupane error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-cream-50">
          <div className="text-center max-w-md">
            <p className="font-accent text-2xl text-wine-700">
              a branch snapped
            </p>
            <h1 className="mt-2 font-display text-4xl text-char-900">
              Something split unexpectedly.
            </h1>
            <p className="mt-4 text-char-500 text-sm">
              Give the page a refresh — if it lingers, send us a WhatsApp and
              we'll look into it.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-wine-700 text-cream-50 text-xs tracking-[0.1em] uppercase hover:bg-wine-600"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-char-800 text-char-800 text-xs tracking-[0.1em] uppercase hover:bg-char-800 hover:text-cream-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
