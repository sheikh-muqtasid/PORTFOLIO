"use client";

import { Button, Column, Heading, Input, Row, Text, Flex } from "@once-ui-system/core";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const { name, email, subject, message } = formData;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:sheikhmuqtasid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Column
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="40"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      maxWidth="m"
    >
      <Heading marginBottom="l" variant="display-strong-xs">
        Get in Touch
      </Heading>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Column gap="m">
            <Row gap="m" s={{ direction: "column" }}>
                <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    width="fill"
                />
                <Input
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    width="fill"
                />
            </Row>
            <Input
                id="subject"
                name="subject"
                label="Subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                width="fill"
            />
            <Flex direction="column" fillWidth gap="8">
                <Text as="label" htmlFor="message" variant="label-default-s" onBackground="neutral-weak">Message</Text>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "var(--static-space-12)",
                        borderRadius: "var(--radius-m)",
                        border: "1px solid var(--neutral-alpha-medium)",
                        background: "var(--neutral-alpha-weak)",
                        color: "var(--neutral-on-background-strong)",
                        fontFamily: "var(--font-body)",
                        resize: "vertical"
                    }}
                />
            </Flex>
            <Button
                size="m"
                fillWidth
                type="submit"
                loading={submitting}
                variant="primary"
            >
                Send Message
            </Button>
        </Column>
      </form>
    </Column>
  );
};
