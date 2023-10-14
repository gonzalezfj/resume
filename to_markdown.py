#!/usr/bin/env python3

import sys
import json

def convert_to_markdown(data):
    markdown = []

    for section in data["sections"]:
        markdown.append(f"# {section['title']}")
        
        if section['title'] == "Personal Information":
            markdown.append(f"- **Full Name:** {section['content']['fullname']}")
            markdown.append(f"- **CV Link:** [{section['content']['cv_link']}]({section['content']['cv_link']})")
            markdown.append(f"- **Web Link:** [{section['content']['web_link']}]({section['content']['web_link']})")
            markdown.append(f"- **Title:** {section['content']['title']}")
        elif section['title'] == "Education":
            for entry in section['content']:
                markdown.append(f"- **Institution:** {entry['institution']}")
                markdown.append(f"- **Location:** {entry['state']}")
                markdown.append(f"- **Degree:** {entry['degree']}")
                markdown.append(f"- **Duration:** {entry['start_date']} - {entry['end_date']}")
                markdown.append(f"- **GPA:** {entry['gpa']}")
        elif section['title'] == "Experience":
            for entry in section['content']:
                markdown.append(f"## {entry['company']} - {entry['location']}")
                for position in entry['positions']:
                    markdown.append(f"- **{position['position']}**")
                    markdown.append(f"  - **Dates:** {position['start_date']} - {position['end_date']}")
                    markdown.append(f"  - **Summary:** {position['summary']}")
                    markdown.append("  - **Highlights:**")
                    for highlight in position['highlights']:
                        markdown.append(f"    - {highlight}")
    
    return "\n".join(markdown)

def read_json_from_pipe():
    try:
        json_data = sys.stdin.read()
        data = json.loads(json_data)
        markdown_text = convert_to_markdown(data)
        print(markdown_text)

    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    read_json_from_pipe()
