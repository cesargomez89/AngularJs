class ProductsController < ApplicationController
  expose(:products)
  expose(:product, atributtes: :product_params)

  # GET /products
  def index
  end

  # GET /products/1
  # GET /products/1.json
  def show
  end


  # POST /products
  def create
    if product.save
      redirect_to(product)
    else
      render :new
    end
  end

  # PATCH/PUT /products/1
  def update
    if product.save
      redirect_to(product)
    else
      render :edit
    end
  end

  # DELETE /products/1
  def destroy
    product.destroy
    respond_to do |format|
      format.html { redirect_to products_url }
      format.json { head :no_content }
    end
  end

  private

    def product_params
      params.require(:product).permit(:name, :price, :description, :stock)
    end
end
