import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-4xl mx-auto px-6 pt-4 lg:pt-6 pb-24">
            <SEO
                title="Privacy Policy | Durozen"
                description="Read our Privacy Policy detailing how we handle, protect, and use your personal information at Durozen."
                path="/privacy"
            />
            <button onClick={() => navigate('/')} className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-10 flex items-center gap-2 hover:text-secondary transition-colors">
                ← Back to Home
            </button>

            <div className="mb-10 border-b border-outline pb-8">
                <span className="inline-block px-3 py-1 bg-surface-dim border border-outline text-[10px] font-bold tracking-widest uppercase text-text-muted rounded-sm mb-4">Legal</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">Privacy Policy</h1>
                <p className="text-sm text-text-muted">Last Updated: June 2026</p>
            </div>

            <div className="prose max-w-none space-y-10 text-text-muted leading-relaxed">
                <p className="text-base text-text-main">
                    Durozen ("we", "our", or "us") is committed to protecting your privacy and handling your personal information responsibly.
                </p>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                    <p className="mb-3">When you contact us through our website, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Full Name</li>
                        <li>Email Address</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Respond to enquiries and requests</li>
                        <li>Provide quotations and project information</li>
                        <li>Communicate regarding our services</li>
                        <li>Improve customer service</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Data Protection</h2>
                    <p className="text-sm">We take appropriate security measures to protect your personal information from unauthorised access, disclosure, or misuse.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Data Sharing</h2>
                    <p className="text-sm">We do not sell, rent, or trade your personal information to third parties. Information may only be shared where required by law.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Data Retention</h2>
                    <p className="text-sm">We retain personal information only for as long as necessary to respond to enquiries and fulfil legitimate business purposes.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Your Rights</h2>
                    <p className="mb-3">Under UK GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to certain processing activities</li>
                    </ul>
                </section>

                <section className="bg-surface border border-outline rounded-lg p-6">
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Contact Us</h2>
                    <p className="text-sm mb-2 font-semibold text-text-main">Durozen</p>
                    <p className="text-sm mb-4">Email: <a href="mailto:info@durozen.in" className="text-secondary hover:underline">info@durozen.in</a></p>
                    <p className="text-sm text-text-muted">If you have any concerns about how your information is handled, you may contact the relevant data protection authority.</p>
                </section>
            </div>
        </div>
    );
}
