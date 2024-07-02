import * as Accordion from "@radix-ui/react-accordion";

export default function AccordionLink() {
  return (
    <div>
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>なまこ</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>と思いきやなめこ</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
