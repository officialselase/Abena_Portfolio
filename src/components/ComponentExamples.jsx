import Button from './Button';
import Card from './Card';
import Section from './Section';

/**
 * Component Examples
 * 
 * This file demonstrates usage of the reusable UI components.
 * It can be used as a reference or component showcase page.
 */
const ComponentExamples = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Reusable Component Examples</h1>

      {/* Button Examples */}
      <Section spacing="md" background="secondary">
        <h2>Button Component</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="gradient">Gradient Button</Button>
          <Button variant="primary" size="sm">Small Button</Button>
          <Button variant="primary" size="lg">Large Button</Button>
          <Button variant="primary" disabled>Disabled Button</Button>
          <Button variant="filter">Filter Button</Button>
          <Button variant="filter" active>Active Filter</Button>
        </div>
      </Section>

      {/* Card Examples */}
      <Section spacing="md">
        <h2>Card Component</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <Card variant="default">
            <h3>Default Card</h3>
            <p>This is a default card with standard styling.</p>
          </Card>
          
          <Card variant="elevated">
            <h3>Elevated Card</h3>
            <p>This card has a prominent shadow.</p>
          </Card>
          
          <Card variant="bordered">
            <h3>Bordered Card</h3>
            <p>This card has a visible border.</p>
          </Card>
          
          <Card variant="flat">
            <h3>Flat Card</h3>
            <p>This card has no shadow or border.</p>
          </Card>
          
          <Card variant="default" hoverable>
            <h3>Hoverable Card</h3>
            <p>Hover over this card to see the effect.</p>
          </Card>
          
          <Card 
            variant="default" 
            hoverable 
            clickable 
            onClick={() => alert('Card clicked!')}
          >
            <h3>Clickable Card</h3>
            <p>Click this card to trigger an action.</p>
          </Card>
        </div>
      </Section>

      {/* Section Examples */}
      <Section spacing="md" background="gradient" contained={true}>
        <h2>Section with Gradient Background</h2>
        <p>This section demonstrates the gradient background variant with contained content.</p>
      </Section>

      <Section spacing="lg" background="dark">
        <h2>Section with Dark Background</h2>
        <p>This section uses the dark background variant with large spacing.</p>
      </Section>

      <Section spacing="sm" background="secondary" contained={false}>
        <div style={{ padding: '0 2rem' }}>
          <h2>Full-Width Section</h2>
          <p>This section is not contained and spans the full width.</p>
        </div>
      </Section>
    </div>
  );
};

export default ComponentExamples;
