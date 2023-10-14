import traceback
import sys
import json

# Define a function to convert a section to LaTeX
def section_to_latex(section):
    latex = "\\section*{%s}\n" % section["title"]
    if "content" in section:
        if section["id"] == "personal_information":
            latex += "\\textbf{Full Name}: %s\n" % section["content"]["fullname"]
            latex += "\\textbf{CV Link}: \\href{%s}{%s}\n" % (
                section["content"]["cv_link"],
                section["content"]["cv_link"],
            )
            latex += "\\textbf{Web Link}: \\href{%s}{%s}\n" % (
                section["content"]["web_link"],
                section["content"]["web_link"],
            )
            latex += "\\textbf{Title}: %s\n" % section["content"]["title"]
        content = section["content"]
        if isinstance(content, dict):
            for key, value in content.items():
                latex += "\\textbf{%s}: %s\n" % (key, value)
        elif isinstance(content, list) and section["id"] == "education":
            latex += "\\begin{itemize}\n"
            for item in content:
                latex += "\\item %s in %s (%s - %s), GPA: %s\n" % (
                    item["institution"],
                    item["state"],
                    item["start_date"],
                    item["end_date"],
                    item["gpa"],
                )
            latex += "\\end{itemize}\n"
    if "positions" in section:
        positions = section["positions"]
        for position in positions:
            latex += "\\subsection*{%s}\n" % position["position"]
            latex += "\\textbf{Company}: %s \\\\\n" % position["company"]
            latex += "\\textbf{Location}: %s \\\\\n" % position["location"]
            latex += "\\textbf{Start Date}: %s \\\\\n" % position["start_date"]
            latex += "\\textbf{End Date}: %s \\\\\n" % position["end_date"]
            latex += "\\textbf{Summary}: %s \\\\\n" % position["summary"]
            latex += "\\textbf{Highlights}:\\begin{itemize}\n"
            for highlight in position["highlights"]:
                latex += "\\item %s\n" % highlight
            latex += "\\end{itemize}\n"
    return latex

def convert_to_latex(data):
    try:
        # Generate LaTeX document
        latex_doc = "\\documentclass{article}\n\\begin{document}\n"
        for section in data["sections"]:
            latex_doc += section_to_latex(section)
        latex_doc += "\\end{document}\n"

        # Print the LaTeX document
        print(latex_doc)

    except Exception as e:
        traceback.print_exc()
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Read JSON data from stdin
    json_data = sys.stdin.read()

    # Parse JSON data
    data = json.loads(json_data)

    # Convert to LaTeX and print to stdout
    convert_to_latex(data)