import removeMarkdown from "remove-markdown"

export const stripMarkdown = (content: string) => {
  // Remove Javascript/Typescript import statement for mdx
  content = content.replace(
    /import(?:(?:(?:[ \n\t]+([^ *\n\t{},]+)[ \n\t]*(?:,|[ \n\t]+))?([ \n\t]*{(?:[ \n\t]*[^ \n\t"'{}]+[ \n\t]*,?)+})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+([^ \n\t{}]+)[ \n\t]+)from[ \n\t]*(?:['"])([^'"\n]+)(['"])/gm,
    "",
  )

  // Remove code blocks
  content = content.replace(/```[\w\W]*\n[\s\S]*?\n```/g, "")

  // Strip markdown stuff from text
  return removeMarkdown(content).replace(/\n/g, " ").trim()
}
