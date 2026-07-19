import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CookiePolicy() {
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-4xl mx-auto px-6 pt-4 lg:pt-6 pb-24">
            <SEO
                title="Cookie Policy | Durozen"
                description="Information on how Durozen uses cookies to ensure the best possible experience on our website."
                path="/cookies"
            />
            <button onClick={() => navigate('/')} className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-10 flex items-center gap-2 hover:text-secondary transition-colors">
                ← Back to Home
            </button>

            <div className="mb-10 border-b border-outline pb-8">
                <span className="inline-block px-3 py-1 bg-surface-dim border border-outline text-[10px] font-bold tracking-widest uppercase text-text-muted rounded-sm mb-4">Legal</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">Cookie Policy</h1>
                <p className="text-sm text-text-muted">Last Updated: June 2026</p>
            </div>

            <div className="space-y-10 text-text-muted leading-relaxed">
                <p className="text-base text-text-main">
                    This website uses cookies to improve user experience and website performance.
                </p>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">What Are Cookies?</h2>
                    <p className="text-sm">Cookies are small text files stored on your device when you visit a website.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">How We Use Cookies</h2>
                    <p className="mb-3">We may use cookies to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Ensure website functionality</li>
                        <li>Analyse website traffic and performance</li>
                        <li>Improve user experience</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Managing Cookies</h2>
                    <p className="text-sm">You can control or disable cookies through your browser settings. Disabling cookies may affect certain website functions.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
                    <p className="text-sm">Our website may use services such as Google Analytics, which may place cookies on your device to help us understand website usage.</p>
                </section>

                <div className="bg-surface border border-outline rounded-lg p-6 text-sm text-text-muted">
                    By continuing to use this website, you consent to our use of cookies as described in this policy.
                </div>
            </div>
        </div>
    );
}
