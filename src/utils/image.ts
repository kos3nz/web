/**
 * Returns a Cloudinary asset delivery URL with the following structure:
 * https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id_full_path>.<extension>
 */
export function createCloudinaryImageSrc({
  title,
  tags,
}: {
  title: string
  tags: string[]
}) {
  return [
    "https://res.cloudinary.com/dp0j7tenc/image/upload", // <domain>/<cloudinaryId>/<file_type>/<source_type>
    // ----------
    // transformations
    // ----------
    // transform composed image: width, height, quality
    "w_1600,h_900,q_auto",

    // format
    "f_auto",

    // Logo layer
    "l_logo",
    "fl_layer_apply,g_north_west,x_240,y_200",

    // Title layer
    `l_text:Helvetica_72_bold_normal_left:${e(title)},co_rgb:F1F5F9,c_fit,w_1126`,
    "fl_layer_apply,g_south_west,x_240,y_284",

    // Meta layer
    `l_text:helvetica_36_normal_left:${e(
      `K's Web  |  ${tags.map((tag) => `#${tag}`).join(" · ")}`,
    )},co_rgb:94A3B8`,
    "fl_layer_apply,g_south_west,x_240,y_200",

    // ----------
    "v1683710727", // <version>
    "cover.png", // <public_id_full_path>.<extension>
  ].join("/")
}

const e = (str: string) => encodeURIComponent(encodeURIComponent(str))
