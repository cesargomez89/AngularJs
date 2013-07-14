json.array!(products) do |product|
  json.extract! product, :name, :price, :description, :stock
  json.url product_url(product, format: :json)
end
