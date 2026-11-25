"use client";

import { Button, Dropdown, Header, Label } from "@heroui/react";

const OPTIONS = [
    { id: "default", label: "ডিফল্ট" },
    { id: "low-high", label: "দাম: কম থেকে বেশি" },
    { id: "high-low", label: "দাম: বেশি থেকে কম" },
];

export default function ProductFilter({ value, onChange }) {

    const current = value || "default";

    const CustomCheckmarkIcon = (
        <svg
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="text-accent-soft-foreground"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );

    const handleSelection = (keys) => {
        onChange(Array.from(keys)[0] || "default");
    };

    return (
        <Dropdown>

            <Button
                aria-label="Product Sort"
                variant="secondary"
                className="h-9 min-w-[88px] gap-1 rounded-lg border border-[#D1D5DB] bg-[#FAFCFA] px-3 text-[13px] font-medium text-[#26352C] shadow-none hover:bg-[#F0F5F1]"
            >
                {OPTIONS.find((o) => o.id === current)?.label}

                <span className="text-[10px]">▼</span>
            </Button>

            <Dropdown.Popover className="min-w-[210px]">

                <Dropdown.Menu
                    selectedKeys={new Set([current])}
                    selectionMode="single"
                    disallowEmptySelection
                    onSelectionChange={handleSelection}
                >

                    <Dropdown.Section>

                        <Header>দাম অনুযায়ী সাজান</Header>

                        {OPTIONS.map((option) => (

                            <Dropdown.Item
                                key={option.id}
                                id={option.id}
                                textValue={option.label}
                            >
                                <Dropdown.ItemIndicator>
                                    {({ isSelected }) =>
                                        isSelected ? CustomCheckmarkIcon : null
                                    }
                                </Dropdown.ItemIndicator>

                                <Label>{option.label}</Label>
                            </Dropdown.Item>

                        ))}

                    </Dropdown.Section>

                </Dropdown.Menu>

            </Dropdown.Popover>

        </Dropdown>
    );
}